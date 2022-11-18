import React from "react";
import { StyledHeader } from "./Header.styles";
import TextField from "../../components/TextField/TextField";
import { Avatar } from "@mui/material";
import Button from "../../components/Button/Button";
import styled from "styled-components";

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5em;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <LeftDiv>EMUMBA</LeftDiv>
      <RightDiv>
        <TextField label="Search Notes..." variant="outlined" />
        <Button color={"white"}>Login</Button>
        {/* <Avatar sx={{ width: "2.4em", height: "2.4em" }} /> */}
      </RightDiv>
    </StyledHeader>
  );
}
