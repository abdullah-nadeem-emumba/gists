import React from "react";
import ToggleView from "../components/ToggleView/ToggleView";
import TableView from "../views/TableView";
import Button from "../components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import CardView from "../views/CardView";
import { Pagination } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

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

export default function LandingScreen({
  gists,
  loading,
  handleNextPage,
  openGistDetails,
  viewType,
  setViewType,
  page,
  handleChangePage,
  count,
}) {
  const displayScreen = () => (
    <div>
      <ToggleView viewType={viewType} setViewType={setViewType} />
      {viewType === LIST && (
        <TableView gists={gists} onRowClick={openGistDetails} />
      )}
      {viewType === CARD && (
        <CardView gists={gists} onCardClick={openGistDetails} />
      )}
      <StyledFooter>
        <StyledDiv>
          <Button onClick={handleNextPage} type="dark">
            Next Page <ArrowForwardIcon sx={{ marginLeft: ".2em" }} />
          </Button>
        </StyledDiv>
        <PaginationDiv>
          <Pagination page={page} count={count} onChange={handleChangePage} />
        </PaginationDiv>
      </StyledFooter>
    </div>
  );
  return loading ? <CircularProgress /> : <>{displayScreen()}</>;
}
