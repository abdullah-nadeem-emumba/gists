import React from "react";
import { StyledTextField } from "../FormField/TextField.styles";
import { InputAdornment } from "@mui/material";

export default function TextField(props) {
  return (
    <StyledTextField
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{props?.icon}</InputAdornment>
        ),
      }}
    />
  );
}
