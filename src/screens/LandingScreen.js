import React from "react";
import ToggleView from "../components/ToggleView/ToggleView";
import TableView from "../views/TableView";
import Button from "../components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
`;

export default function LandingScreen() {
  return (
    <div>
      <ToggleView />
      <TableView />
      <StyledDiv>
        <Button color={"green"}>
          Next Page <ArrowForwardIcon sx={{ marginLeft: ".2em" }} />
        </Button>
      </StyledDiv>
    </div>
  );
}
