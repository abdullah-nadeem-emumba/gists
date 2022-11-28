import React, { useState, useEffect, useContext } from "react";
import UserInfo from "../UserInfo/UserInfo";
import styled from "styled-components";
import { Typography, Card } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

const UpperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  margin-left: -1em;
`;

const EachDiv = styled.div`
  display: flex;
  align-items: center;
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

const StyledDiv = styled.div`
  display: flex;
`;

const StyledCard = styled(Card)`
  width: inherit;
  padding: 0.2em 0.7em;
  min-height: 15em;
  overflow: hidden;
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

export default function UserGist({ item }) {
  const [filecontent, setFileContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [starred, setStarred] = useState(false);
  const { user } = useContext(UserContext);
  const formatFileContent = (content) => {
    if (typeof content === "string") return content.split(/\r?\n/);
    return JSON.stringify(content, null, 2).split(/\r?\n/);
  };

  useEffect(() => {
    getFileContent();
    isGistStarred(item.id);
  }, []);

  const getFileContent = async () => {
    if (item) {
      setLoading(true);
      try {
        const filename = Object.keys(item.files)[0];
        const response = await axios.get(item.files[filename].raw_url);
        const result = formatFileContent(response.data);
        setFileContent(result);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    }
  };

  const config = {
    headers: { authorization: `token ${user?.token}` },
  };

  const toggleStar = async (gistID) => {
    if (!starred) {
      const response = await axios.put(
        `https://api.github.com/gists/${gistID}/star`,
        {
          gist_id: gistID,
        },
        config
      );
      setStarred(true);
    } else {
      const response = await axios.delete(
        `https://api.github.com/gists/${gistID}/star`,
        config
      );
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

  const forkGist = async (gistID) => {
    const response = await axios.post(
      `https://api.github.com/gists/${gistID}/forks`,
      config
    );
    console.log(response);
  };

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
  return (
    <>
      <UpperDiv>
        <UserInfo item={item} />
        {user && (
          <StyledDiv>
            <EachDiv onClick={() => toggleStar(item.id)}>
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
            <EachDiv onClick={() => forkGist(item.id)}>
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
          </StyledDiv>
        )}
      </UpperDiv>
      <StyledCard elevation={3}>{displayFileContent()}</StyledCard>
    </>
  );
}
