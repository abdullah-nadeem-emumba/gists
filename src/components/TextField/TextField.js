import React from "react";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & label {
    color: white;
    font-weight: 10px;
  }
  & .MuiOutlinedInput-root {
    width: 25em;
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

export default function MyTextField({ label, variant }) {
  return (
    <StyledTextField
      label={label}
      variant={variant}
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: "white" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}
