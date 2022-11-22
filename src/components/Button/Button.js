import React from "react";
import { StyledButton } from "./Button.styles";

export default function Button({ children, type, customstyle, onClick }) {
  return (
    <StyledButton onClick={onClick} type={type} customstyle={customstyle}>
      {children}
    </StyledButton>
  );
}
