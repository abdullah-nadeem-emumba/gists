import React from "react";
import { InputAdornment } from "@mui/material";
import { StyledTextField } from "./TextField.styles";

export default function TextField({
  type,
  label,
  variant,
  icon,
  fullWidth,
  size,
  multiline,
  rows,
}) {
  return (
    <StyledTextField
      type={type}
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      multiline={multiline}
      rows={rows}
      InputProps={{
        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
      }}
    />
  );
}
