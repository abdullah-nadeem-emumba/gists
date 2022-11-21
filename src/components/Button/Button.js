import React from "react";
import { StyledButton } from "./Button.styles";

export default function Button({ children, type, onClick }) {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
}
