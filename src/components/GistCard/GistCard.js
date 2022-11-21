import React from "react";
import styled from "styled-components";
import UserInfo from "../UserInfo/UserInfo";
import { Card } from "@mui/material";

const GistDiv = styled.div`
  height: 12em;
  padding: 1em 1.5em;
  border-bottom: 1px solid #a7a7a7;
`;

const StyledCard = styled(Card)`
  &&& {
    min-width: 14em;
    padding: 1em;
    cursor: pointer;
  }
`;

export default function GistCard({ item, onCardClick }) {
  return (
    <StyledCard onClick={onCardClick}>
      <GistDiv></GistDiv>
      <UserInfo item={item} />
    </StyledCard>
  );
}
