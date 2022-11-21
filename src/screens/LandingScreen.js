import React, { useState, useEffect } from "react";
import ToggleView from "../components/ToggleView/ToggleView";
import TableView from "../views/TableView";
import Button from "../components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import CardView from "../views/CardView";
import GistScreen from "./GistScreen";
import { Pagination } from "@mui/material";
import axios from "axios";

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

const PaginationDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2.5em;
`;

const CARD = "CARD";
const LIST = "LIST";

export default function LandingScreen() {
  const [viewType, setViewType] = useState("LIST");
  const [openGist, setOpenGist] = useState(false);
  const [gists, setGists] = useState();

  useEffect(() => {
    getGists();
  }, []);

  const getGists = async () => {
    const { data } = await axios.get("https://api.github.com/gists/public");
    if (data.length > 0) {
      setGists(data);
    }
    console.log(data);
  };

  return openGist ? (
    <GistScreen />
  ) : (
    <div>
      <ToggleView viewType={viewType} setViewType={setViewType} />
      {viewType === LIST && (
        <TableView gists={gists} onRowClick={() => setOpenGist(true)} />
      )}
      {viewType === CARD && (
        <CardView gists={gists} onCardClick={() => setOpenGist(true)} />
      )}
      <StyledFooter>
        <StyledDiv>
          <Button type="dark">
            Next Page <ArrowForwardIcon sx={{ marginLeft: ".2em" }} />
          </Button>
        </StyledDiv>
        <PaginationDiv>
          <Pagination count={10} />
        </PaginationDiv>
      </StyledFooter>
    </div>
  );
}
