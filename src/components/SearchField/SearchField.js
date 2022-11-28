import React from "react";
import { InputAdornment, IconButton } from "@mui/material";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    display: none;
  }
  & label {
    color: ${(props) => (props.customstyle === "light" ? "#FFF" : "#a7a7a7")};
    font-weight: 10px;
  }
  & .MuiFormLabel-filled {
    display: none;
  }
  & .MuiOutlinedInput-root {
    width: ${(props) => (props.fullWidth ? "100%" : "25em")};
    color: #fff;
    & fieldset {
      border: none;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #fff;
`;

export default function SearchField({
  value,
  onChange,
  customstyle,
  label,
  variant,
  placeholder,
  handleSearch,
  handleKeyPress,
}) {
  return (
    <FieldWrapper>
      <StyledTextField
        customstyle={customstyle}
        vlaue={value}
        onChange={onChange}
        label={label}
        variant={variant}
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
      />
      <SearchIcon
        onClick={handleSearch}
        sx={{ color: "white", marginRight: "1em", cursor: "pointer" }}
      />
    </FieldWrapper>
  );
}
