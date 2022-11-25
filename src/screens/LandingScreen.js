import React, { useState, useEffect, useContext } from "react";
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
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { SearchContext } from "../contexts/SearchContext";

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
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { searchResult, setSearchResult } = useContext(SearchContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const openGistDetails = (gist) => {
    navigate("/gistdetails", { state: { ...gist } });
  };

  useEffect(() => {
    getGists();
  }, [page, viewType]);

  useEffect(() => {
    getGists();
  }, []);

  // useEffect(() => {
  //   setGists(searchResult);
  // }, [searchResult]);

  const config = {
    headers: { authorization: `token ${user.token}` },
  };

  const getGists = async () => {
    // if (searchResult && searchResult.length > 0) return;
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/gists/public?per_page=${
        viewType === CARD ? "9" : "10"
      }&page=${page}`,
      config
    );
    console.log(response);
    const data = response.data;
    if (data.length > 0) {
      setGists(data);
    }
    setLoading(false);
  };

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
