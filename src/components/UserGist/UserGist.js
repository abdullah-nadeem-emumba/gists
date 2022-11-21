import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import styled from "styled-components";
import { Typography, Card } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const UpperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  margin-left: -1em;
`;

const EachDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.3em;
  cursor: pointer;
`;

const BorderedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 0em 0.9em;
  border: 1px solid lightgray;
  border-radius: 10%;
  margin-left: 0.4em;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledCard = styled(Card)`
  width: inherit;
  padding: 0.2em 0.7em;
  height: 50em;
`;

export default function UserGist() {
  return (
    <>
      <UpperDiv>
        <UserInfo />
        <StyledDiv>
          <EachDiv>
            <StarBorderIcon sx={{ color: "#0C76FF" }} />
            <Typography color={"#0C76FF"}>Star</Typography>
            <BorderedDiv>
              <Typography
                sx={{
                  fontSize: ".9em",
                  margin: "0.2em 0 0 0",
                  padding: 0,
                  color: "#787a79",
                }}
              >
                0
              </Typography>
            </BorderedDiv>
          </EachDiv>
          <EachDiv>
            <StarBorderIcon sx={{ color: "#0C76FF" }} />
            <Typography color={"#0C76FF"}>Fork</Typography>
            <BorderedDiv>
              <Typography
                sx={{
                  fontSize: ".9em",
                  margin: "0.2em 0 0 0",
                  padding: 0,
                  color: "#787a79",
                }}
              >
                0
              </Typography>
            </BorderedDiv>
          </EachDiv>
        </StyledDiv>
      </UpperDiv>
      <StyledCard elevation={3}></StyledCard>
    </>
  );
}
