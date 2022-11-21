import React from "react";
import styled from "styled-components";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import { LIST, CARD } from "../../constants/constants";

const StyledDiv = styled.div`
  display: flex;
  width: "100%";
  justify-content: flex-end;
  column-gap: normal;
`;

const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7em;
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.7em;
  border-left: 1px solid gray;
`;

export default function ToggleView({ viewType, setViewType }) {
  return (
    <StyledDiv>
      <LeftDiv>
        <GridViewIcon
          onClick={() => setViewType(CARD)}
          sx={{
            color: viewType === CARD ? "#5acba1" : "gray",
            width: "1.2em",
            height: "1.2em",
            cursor: "pointer",
          }}
        />
      </LeftDiv>
      <RightDiv>
        <FormatListBulletedIcon
          onClick={() => setViewType(LIST)}
          sx={{
            color: viewType === LIST ? "#5acba1" : "gray",
            width: "1.2em",
            height: "1.2em",
            cursor: "pointer",
          }}
        />
      </RightDiv>
    </StyledDiv>
  );
}
