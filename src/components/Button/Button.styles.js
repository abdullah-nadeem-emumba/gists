import styled from "styled-components";
import { Button } from "@mui/material";

export const WhiteButton = styled(Button)`
  &&& {
    background-color: white;
    min-width: 8em;
    color: #5acba1;
    text-transform: none;
  }
`;

export const GreenButton = styled(Button)`
  &&& {
    background-color: #5acba1;
    min-width: 10em;
    color: white;
    text-transform: none;
  }
`;
