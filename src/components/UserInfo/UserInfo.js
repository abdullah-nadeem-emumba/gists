import React from "react";
import styled from "styled-components";
import { Avatar, Typography } from "@mui/material";

const GistInfoDiv = styled.div`
  display: flex;
  column-gap: 1.3em;
  padding: 1em 1.2em 0 1.2em;
`;

const StyledSpan = styled.span`
  color: "#0C76FF";
  font-weight: 800;
`;

export default function UserInfo({ item }) {
  const filename = Object.keys(item.files)[0];
  return (
    <GistInfoDiv>
      <Avatar
        src={item.owner.avatar_url}
        sx={{ width: "3.1em", height: "3.1em" }}
      />
      <div>
        <Typography align="left" sx={{ color: "#0C76FF", fontWeight: 700 }}>
          {item.owner.login} / {filename}
          <StyledSpan></StyledSpan>
        </Typography>
        <Typography sx={{ color: "#a7a7a7" }} textAlign={"left"}>
          Created {item.created_at}
        </Typography>
        <Typography
          sx={{ color: "#a7a7a7", fontSize: ".65em", marginTop: "-2px" }}
          textAlign={"left"}
        >
          Broadcast Server
        </Typography>
      </div>
    </GistInfoDiv>
  );
}
