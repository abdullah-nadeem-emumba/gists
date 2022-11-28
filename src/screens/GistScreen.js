import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Typography, Card, CircularProgress } from "@mui/material";
import UserInfo from "../components/UserInfo/UserInfo";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import ArrowsBox from "../components/ArrowsBox/ArrowsBox";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Header from "../layout/Header/Header";
import Container from "../layout/AppContainer/Container";

const GistScreenContainer = styled.div`
  display: grid;
  grid-template-rows: 5.5em 50em;
  padding: 0 4.8em;
`;

const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderRightDiv = styled.div`
  display: flex;
  align-items: end;
  column-gap: 1em;
`;

const EachDiv = styled.div`
  display: flex;
  align-items: end;
  column-gap: 0.3em;
  cursor: pointer;
`;

const BorderedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 0em 0.9em;
  border: 1px solid lightgray;
  border-radius: 10%;
  margin-left: 0.4em;
`;

const StyledGistCard = styled(Card)`
  &&& {
    margin-top: 2em;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5em 1.5em;
  border-bottom: 1px solid lightgray;
`;

const CardContent = styled.div`
  padding: 0.5em 3.8em;
  height: 100%;
  overflow-y: scroll;
`;

const StyledText = styled(Typography)`
  &&& {
    font-size: 0.9em;
  }
`;

const LineNumberText = styled(Typography)`
  margin-right: 1.5em;
  color: #a7a7a7;
  &&& {
    font-size: 0.9em;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  column-gap: 1.2em;
  overflow: hidden;
  max-height: 1.5em;
  overflow-x: auto;
`;

const CenterDiv = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function GistScreen() {
  const [filecontent, setFileContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [starred, setStarred] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { files, owner, id, description } = state;

  const { user } = useContext(UserContext);

  const formatFileContent = (content) => {
    if (typeof content === "string") return content.split(/\r?\n/);
    return JSON.stringify(content, null, 2).split(/\r?\n/);
  };

  useEffect(() => {
    isGistStarred(id);
    getFileContent();
  }, []);

  const getFileContent = async () => {
    if (state) {
      setLoading(true);
      try {
        const filename = Object.keys(files)[0];
        const response = await axios.get(files[filename].raw_url);
        const result = formatFileContent(response.data);
        setFileContent(result);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    }
  };

  const filename = Object.keys(files)[0];

  const displayFileContent = () => {
    if (error) {
      return (
        <CenterDiv>
          <Typography>Unable to load gist...</Typography>
        </CenterDiv>
      );
    } else if (filecontent.length > 0) {
      return React.Children.toArray(
        filecontent.map((line, index) => {
          return (
            <FlexDiv>
              {" "}
              <LineNumberText>{index + 1}</LineNumberText>
              <StyledText>{line}</StyledText>
            </FlexDiv>
          );
        })
      );
    }
  };

  const config = {
    headers: { authorization: `token ${user?.token}` },
  };

  const deleteGist = async (gistID) => {
    const response = await axios.delete(
      `https://api.github.com/gists/${gistID}`,
      config
    );
    if (response.status === 204) {
      navigate("/");
    }
  };

  const forkGist = async (gistID) => {
    const response = await axios.post(
      `https://api.github.com/gists/${gistID}/forks`,
      config
    );
    console.log(response);
  };

  const toggleStar = async (gistID) => {
    if (!starred) {
      await axios.put(
        `https://api.github.com/gists/${gistID}/star`,
        {
          gist_id: gistID,
        },
        config
      );
      setStarred(true);
    } else {
      await axios.delete(`https://api.github.com/gists/${gistID}/star`, config);
      setStarred(false);
    }
  };

  const isGistStarred = async (gistID) => {
    try {
      const response = await axios.get(
        `https://api.github.com/gists/${gistID}/star`,
        config
      );
      if (response.status === 204) {
        setStarred(true);
      }
    } catch (error) {
      setStarred(false);
    }
  };

  const editGist = () => {
    navigate("/create", {
      state: { content: filecontent, filename, description, id },
    });
  };

  const showGistActions = () => {
    return user ? (
      <HeaderRightDiv>
        {user.username === owner.login && (
          <>
            {" "}
            <EachDiv onClick={editGist}>
              <EditIcon sx={{ color: "#0C76FF" }} />
              <Typography color={"#0C76FF"}>Edit</Typography>
            </EachDiv>
            <EachDiv onClick={() => deleteGist(id)}>
              <DeleteIcon sx={{ color: "#0C76FF" }} />
              <Typography color={"#0C76FF"}>Delete</Typography>
            </EachDiv>
          </>
        )}
        <EachDiv onClick={() => toggleStar(id)}>
          {starred ? (
            <StarIcon sx={{ color: "#0C76FF" }} />
          ) : (
            <StarBorderIcon sx={{ color: "#0C76FF" }} />
          )}
          <Typography color={"#0C76FF"}>Star</Typography>
          <BorderedDiv>
            <Typography
              sx={{
                fontSize: ".9em",
                margin: "0.2em 0 0 0",
                padding: 0,
                color: "#787a79",
              }}
            >
              {starred ? 1 : 0}
            </Typography>
          </BorderedDiv>
        </EachDiv>
        <EachDiv onClick={() => forkGist(id)}>
          <StarBorderIcon sx={{ color: "#0C76FF" }} />
          <Typography color={"#0C76FF"}>Fork</Typography>
          <BorderedDiv>
            <Typography
              sx={{
                fontSize: ".9em",
                margin: "0.2em 0 0 0",
                padding: 0,
                color: "#787a79",
              }}
            >
              0
            </Typography>
          </BorderedDiv>
        </EachDiv>
      </HeaderRightDiv>
    ) : null;
  };

  return loading ? (
    <CircularProgress />
  ) : (
    <div>
      <Header />
      <Container>
        <GistScreenContainer>
          <StyledHeaderDiv>
            <UserInfo item={state} />
            {showGistActions()}
          </StyledHeaderDiv>
          <StyledGistCard elevation={5}>
            <CardHeader>
              <ArrowsBox />
              <Typography color={"#0C76FF"}>{filename}</Typography>
            </CardHeader>
            <CardContent>{displayFileContent()}</CardContent>
          </StyledGistCard>
        </GistScreenContainer>
      </Container>
    </div>
  );
}
