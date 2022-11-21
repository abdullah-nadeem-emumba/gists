import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Card } from "@mui/material";
import UserInfo from "../components/UserInfo/UserInfo";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowsBox from "../components/ArrowsBox/ArrowsBox";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const GistScreenContainer = styled.div`
  display: grid;
  grid-template-rows: 5.5em 55em;
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

export default function GistScreen({}) {
  const [gist, setGist] = useState();
  const { state } = useLocation();
  useEffect(() => {
    getGistDetails();
  }, []);

  const getGistDetails = async () => {
    const response = axios.get(`https://api.github.com/gists/${state.id}`);
    console.log(response);
  };

  return (
    <GistScreenContainer>
      <StyledHeaderDiv>
        <UserInfo />
        <HeaderRightDiv>
          <EachDiv>
            <DeleteIcon sx={{ color: "#0C76FF" }} />
            <Typography color={"#0C76FF"}>Edit</Typography>
          </EachDiv>
          <EachDiv>
            <DeleteIcon sx={{ color: "#0C76FF" }} />
            <Typography color={"#0C76FF"}>Delete</Typography>
          </EachDiv>
          <EachDiv>
            <StarBorderIcon sx={{ color: "#0C76FF" }} />
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
                0
              </Typography>
            </BorderedDiv>
          </EachDiv>
          <EachDiv>
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
      </StyledHeaderDiv>
      <StyledGistCard elevation={5}>
        <CardHeader>
          <ArrowsBox />
          <Typography color={"#0C76FF"}>gistfile1.m</Typography>
        </CardHeader>
        <CardContent></CardContent>
      </StyledGistCard>
    </GistScreenContainer>
  );
}
