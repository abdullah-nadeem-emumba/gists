import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import UserGist from "../components/UserGist/UserGist";
import { Typography, Avatar, Button } from "@mui/material";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import Header from "../layout/Header/Header";
import Container from "../layout/AppContainer/Container";
import { useLocation } from "react-router-dom";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
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
  margin-bottom: 2em;
`;

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function UserProfile() {
  const [gists, setGists] = useState([]);
  const { user } = useContext(UserContext);
  const { state } = useLocation();

  const owner = gists.length > 0 && gists[0].owner;

  console.log(state);
  useEffect(() => {
    getUserGists();
  }, []);

  const getUserGists = async () => {
    if (state) {
      const response = await axios.get(
        `https://api.github.com/users/${state.owner.login}/gists`
      );
      setGists(response.data);
    } else {
      const response = await axios.get(
        `https://api.github.com/users/${user?.username}/gists`
      );
      setGists(response.data);
    }
  };

  const listGists = () => {
    if (gists.length > 0) {
      return React.Children.toArray(
        gists.map((item) => <UserGist item={item} />)
      );
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <GridContainer>
          <LeftDiv>
            <CenterDiv>
              <Avatar
                src={state?.owner?.avatar_url || owner?.avatar_url}
                sx={{ width: "12em", height: "12em", marginBottom: "1.7em" }}
              />
              <Typography variant="h5">
                {state?.owner?.login || owner.login}
              </Typography>
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
            </CenterDiv>
          </LeftDiv>
          <RightDiv>{listGists()}</RightDiv>
        </GridContainer>
      </Container>
    </div>
  );
}
