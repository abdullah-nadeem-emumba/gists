import React from "react";
import styled from "styled-components";
import CodeIcon from "@mui/icons-material/Code";

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  border: 1px solid black;
  margin-top: 0.1em;
  margin-right: 0.5em;
`;

export default function ArrowsBox() {
  return (
    <StyledBox>
      <CodeIcon
        fontSize="6em"
        sx={{
          width: "18px",
          height: "14px",
          color: "#a7a7a7",
        }}
      />
    </StyledBox>
  );
}
