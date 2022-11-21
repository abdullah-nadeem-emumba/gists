import React from "react";
import styled from "styled-components";
import UserGist from "../components/UserGist/UserGist";
import { Typography, Avatar, Button } from "@mui/material";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;

  /* height: 50em; */
  border-bottom: 1px solid lightgray;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  padding-right: 6em;
  align-items: flex-end;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  padding-left: 2.5em;
  border-left: 1px solid lightgray;
  height: 80em;
  overflow-y: auto;
`;

export default function UserProfile() {
  return (
    <GridContainer>
      <LeftDiv>
        <div>
          <Avatar
            sx={{ width: "12em", height: "12em", marginBottom: "1.7em" }}
          />
          <Typography variant="h5">Anna John</Typography>
          <Button
            variant="outlined"
            sx={{
              padding: ".4em 3em",
              textTransform: "none",
              marginTop: "2em",
            }}
          >
            View Github Profile
          </Button>
        </div>
      </LeftDiv>
      <RightDiv>
        <UserGist />
        <UserGist />
        <UserGist />
      </RightDiv>
    </GridContainer>
  );
}
