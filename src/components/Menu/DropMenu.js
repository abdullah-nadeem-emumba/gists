import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuList, Divider, MenuItem, ListItemText } from "@mui/material";
import styled from "styled-components";

const StyledMenuItem = styled(MenuItem)`
  &&& {
    padding: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`;

export default function DropMenu({ open, onClose, anchorEl, signout }) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      sx={{ top: "5%", width: "16em" }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MenuList sx={{ border: "none", padding: "0 1em" }} dense>
        <ListItemText>Signed in as</ListItemText>
        <StyledMenuItem>
          <ListItemText>Anna John</ListItemText>
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem>
          <ListItemText>
            <StyledLink to="/profile">Your gists</StyledLink>
          </ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText>Starred gists</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText>
            {" "}
            <StyledLink to="/create">Create gist</StyledLink>
          </ListItemText>
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem>
          <ListItemText>Your github profile</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText onClick={signout}>Sign out</ListItemText>
        </StyledMenuItem>
      </MenuList>
    </Menu>
  );
}
