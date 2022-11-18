import React from "react";
import styled from "styled-components";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";

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
  padding: 0.7em;
  border-left: 1px solid gray;
`;

export default function ToggleView() {
  return (
    <StyledDiv>
      <LeftDiv>
        <GridViewIcon
          sx={{
            color: "gray",
            width: "1.2em",
            height: "1.2em",
            cursor: "pointer",
          }}
        />
      </LeftDiv>
      <RightDiv>
        <FormatListBulletedIcon
          sx={{
            color: "#5acba1",
            width: "1.2em",
            height: "1.2em",
            cursor: "pointer",
          }}
        />
      </RightDiv>
    </StyledDiv>
  );
}
