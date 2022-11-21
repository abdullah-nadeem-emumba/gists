import React from "react";
import { StyledButton } from "./Button.styles";

export default function Button({ children, type }) {
  return <StyledButton type={type}>{children}</StyledButton>;
}
