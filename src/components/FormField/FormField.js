import React from "react";
import { useField } from "formik";
import { InputAdornment } from "@mui/material";
import { StyledTextField } from "./TextField.styles";
import styled from "styled-components";

const StyledError = styled.p`
  text-align: left;
  color: #ff0033;
  margin-bottom: 0;
  font-size: 0.8em;
`;

export default function FormField({
  // id,
  // name,
  // type,
  // label,
  // variant,
  //icon,
  // fullWidth,
  // size,
  // multiline,
  // rows,
  // value,
  // onChange,
  // onBlur,
  ...props
}) {
  const [field, meta, helper] = useField(props);
  return (
    <>
      <StyledTextField
        {...field}
        {...props}
        // id={id}
        // name={name}
        // value={value}
        // onChange={onChange}
        // type={type}
        // label={label}
        // variant={variant}
        // fullWidth={fullWidth}
        // size={size}
        // multiline={multiline}
        // rows={rows}
        // onBlur={onBlur}
      />
      {meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
    </>
  );
}
