import React from "react";
import { StyledHeader } from "./Header.styles";
import TextField from "../../components/TextField/TextField";
import { Avatar, Typography } from "@mui/material";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

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
      <LeftDiv>
        <Typography variant="h4">EMUMBA</Typography>
      </LeftDiv>
      <RightDiv>
        <TextField
          type="light"
          label="Search Notes..."
          variant="outlined"
          icon={<SearchIcon sx={{ color: "white" }} />}
          color="WHITE"
        />
        {/* <Button type="light">Login</Button> */}
        <Avatar sx={{ width: "2.9em", height: "2.9em", cursor: "pointer" }} />
      </RightDiv>
    </StyledHeader>
  );
}
