import styled from "styled-components";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  &&& {
    background-color: ${(props) =>
      props.type === "light" ? "#FFF" : "#5acba1"};
    min-width: 8em;
    color: ${(props) => (props.type === "light" ? "#5acba1" : "#FFF")};
    text-transform: none;
    font-weight: 500;
    font-size: 1em;
    padding: 0.5em 0em;
  }
`;
