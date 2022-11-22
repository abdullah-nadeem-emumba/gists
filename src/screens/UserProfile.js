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
  const item = {
    url: "https://api.github.com/gists/b2d4f51abb4d04d2f5a2372b1d2a3571",
    forks_url:
      "https://api.github.com/gists/b2d4f51abb4d04d2f5a2372b1d2a3571/forks",
    commits_url:
      "https://api.github.com/gists/b2d4f51abb4d04d2f5a2372b1d2a3571/commits",
    id: "b2d4f51abb4d04d2f5a2372b1d2a3571",
    node_id: "G_kwDOAF-wA9oAIGIyZDRmNTFhYmI0ZDA0ZDJmNWEyMzcyYjFkMmEzNTcx",
    git_pull_url:
      "https://gist.github.com/b2d4f51abb4d04d2f5a2372b1d2a3571.git",
    git_push_url:
      "https://gist.github.com/b2d4f51abb4d04d2f5a2372b1d2a3571.git",
    html_url: "https://gist.github.com/b2d4f51abb4d04d2f5a2372b1d2a3571",
    files: {
      "1.RegistrySnapshot.xml": {
        filename: "1.RegistrySnapshot.xml",
        type: "application/xml",
        language: "XML",
        raw_url:
          "https://gist.githubusercontent.com/choco-bot/b2d4f51abb4d04d2f5a2372b1d2a3571/raw/029d67d9ac3fef2d85ba939c42c669fa24cd8bd2/1.RegistrySnapshot.xml",
        size: 1351,
      },
      "FilesSnapshot.xml": {
        filename: "FilesSnapshot.xml",
        type: "application/xml",
        language: "XML",
        raw_url:
          "https://gist.githubusercontent.com/choco-bot/b2d4f51abb4d04d2f5a2372b1d2a3571/raw/cf26ff49f5f40505294cf22222932b4b31b537b2/FilesSnapshot.xml",
        size: 589,
      },
      "Install.txt": {
        filename: "Install.txt",
        type: "text/plain",
        language: "Text",
        raw_url:
          "https://gist.githubusercontent.com/choco-bot/b2d4f51abb4d04d2f5a2372b1d2a3571/raw/45dbceedacb0b175f53cb540e131dcdf9bca1128/Install.txt",
        size: 40186,
      },
      "Uninstall.txt": {
        filename: "Uninstall.txt",
        type: "text/plain",
        language: "Text",
        raw_url:
          "https://gist.githubusercontent.com/choco-bot/b2d4f51abb4d04d2f5a2372b1d2a3571/raw/8c804edf68f23a5450f62923cd6cef7ca1da35ef/Uninstall.txt",
        size: 16588,
      },
      "_Summary.md": {
        filename: "_Summary.md",
        type: "text/markdown",
        language: "Markdown",
        raw_url:
          "https://gist.githubusercontent.com/choco-bot/b2d4f51abb4d04d2f5a2372b1d2a3571/raw/1f35e002a66797b358c457dedf86c05446ed754d/_Summary.md",
        size: 470,
      },
    },
    public: true,
    created_at: "2022-11-21T14:28:26Z",
    updated_at: "2022-11-21T14:28:27Z",
    description: "directoryopus v12.30 - Passed - Package Tests Results",
    comments: 0,
    user: null,
    comments_url:
      "https://api.github.com/gists/b2d4f51abb4d04d2f5a2372b1d2a3571/comments",
    owner: {
      login: "choco-bot",
      id: 6270979,
      node_id: "MDQ6VXNlcjYyNzA5Nzk=",
      avatar_url: "https://avatars.githubusercontent.com/u/6270979?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/choco-bot",
      html_url: "https://github.com/choco-bot",
      followers_url: "https://api.github.com/users/choco-bot/followers",
      following_url:
        "https://api.github.com/users/choco-bot/following{/other_user}",
      gists_url: "https://api.github.com/users/choco-bot/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/choco-bot/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/choco-bot/subscriptions",
      organizations_url: "https://api.github.com/users/choco-bot/orgs",
      repos_url: "https://api.github.com/users/choco-bot/repos",
      events_url: "https://api.github.com/users/choco-bot/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/choco-bot/received_events",
      type: "User",
      site_admin: false,
    },
    truncated: false,
  };
  return (
    <GridContainer>
      <LeftDiv>
        <div>
          <Avatar
            src={item.owner.avatar_url}
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
        <UserGist item={item} />
        <UserGist item={item} />
        <UserGist item={item} />
      </RightDiv>
    </GridContainer>
  );
}
