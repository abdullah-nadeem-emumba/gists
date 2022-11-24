import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styles";
import TextField from "../../components/TextField/TextField";
import { Avatar, Typography } from "@mui/material";
import Button from "../../components/Button/Button";
import DropMenu from "../../components/Menu/DropMenu";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { TOKEN } from "../../constants/constants";

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5em;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`;

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const login = () => {
    localStorage.setItem("token", TOKEN);
    setLoggedIn(TOKEN);
  };

  const signout = () => {
    localStorage.removeItem("token");
    setLoggedIn("");
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <LeftDiv>
        <Typography variant="h4">
          <StyledLink to="/">EMUMBA</StyledLink>
        </Typography>
      </LeftDiv>
      <RightDiv>
        <TextField
          customstyle="light"
          label="Search Notes..."
          variant="outlined"
          icon={<SearchIcon sx={{ color: "white" }} />}
        />
        {!loggedIn ? (
          <Button onClick={login} customstyle="light">
            Login
          </Button>
        ) : (
          <Avatar
            onClick={handleOpen}
            sx={{ width: "2.9em", height: "2.9em", cursor: "pointer" }}
          />
        )}
        <DropMenu
          signout={signout}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        />
      </RightDiv>
    </StyledHeader>
  );
}
