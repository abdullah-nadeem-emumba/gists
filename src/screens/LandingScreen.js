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
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigation } from "react-router-dom";

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
  const [loading, setLoading] = useState(false);
  const [gists, setGists] = useState();
  const [page, setPage] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [gistDetails, setGistDetails] = useState({});

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  //   const openGistDetails = (id) => {
  //     navigate("/creategist", {});
  //   };

  useEffect(() => {
    getGists();
  }, [page, viewType]);

  const getGists = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/gists/public?per_page=${
        viewType === CARD ? "9" : "10"
      }&page=${page}  `
    );
    console.log(response);
    const data = response.data;
    if (data.length > 0) {
      setGists(data);
    }
    setLoading(false);
  };

  const showGistDetails = (gist) => {
    setGistDetails(gist);
    setShowDetails(true);
  };

  const displayScreen = () =>
    showDetails ? (
      <GistScreen gistDetails={gistDetails} />
    ) : (
      <div>
        <ToggleView viewType={viewType} setViewType={setViewType} />
        {viewType === LIST && (
          <TableView gists={gists} onRowClick={showGistDetails} />
        )}
        {viewType === CARD && <CardView gists={gists} />}
        <StyledFooter>
          <StyledDiv>
            <Button onClick={handleNextPage} type="dark">
              Next Page <ArrowForwardIcon sx={{ marginLeft: ".2em" }} />
            </Button>
          </StyledDiv>
          <PaginationDiv>
            <Pagination
              page={page}
              count={gists?.length}
              onChange={handleChangePage}
            />
          </PaginationDiv>
        </StyledFooter>
      </div>
    );

  return loading ? <CircularProgress /> : <>{displayScreen()}</>;
}
