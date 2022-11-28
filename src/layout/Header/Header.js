import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styles";
import SearchField from "../../components/SearchField/SearchField";
import { Avatar, Typography } from "@mui/material";
import Button from "../../components/Button/Button";
import DropMenu from "../../components/Menu/DropMenu";
import styled from "styled-components";
import { USER } from "../../constants/constants";
import { UserContext } from "../../contexts/UserContext";
import { SearchContext } from "../../contexts/SearchContext";
import axios from "axios";

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

export default function Header({
  searchVal,
  handleSearch,
  handleSearchChange,
  handleKeyPress,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, setUser } = useContext(UserContext);
  // const { searchResult, setSearchResult } = useContext(SearchContext);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const login = () => {
    setUser(USER);
    localStorage.setItem("user", JSON.stringify(USER));
  };

  const signout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setAnchorEl(null);
  };

  // const getUserGists = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.github.com/users/${searchVal}/gists`
  //     );
  //     console.log(response);
  //     setSearchResult(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <StyledHeader>
      <LeftDiv>
        <Typography variant="h4">
          <StyledLink to="/">EMUMBA</StyledLink>
        </Typography>
      </LeftDiv>
      <RightDiv>
        <SearchField
          value={searchVal}
          onChange={handleSearchChange}
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
          customstyle="light"
          label="Search Notes..."
          variant="outlined"
          placeholder="Search Notes..."
        />
        {!user ? (
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
