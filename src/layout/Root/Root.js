import React, { useState, useEffect, useContext } from "react";
import Container from "../AppContainer/Container";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LandingScreen from "../../screens/LandingScreen";
import CreateGist from "../../screens/CreateGist";
import UserProfile from "../../screens/UserProfile";
import GistScreen from "../../screens/GistScreen";

export default function Root({ Header, screenName }) {
  const [viewType, setViewType] = useState("LIST");
  const [loading, setLoading] = useState(false);
  const [gists, setGists] = useState();
  const [page, setPage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const openGistDetails = (gist) => {
    navigate("/gistdetails", { state: { ...gist } });
  };

  useEffect(() => {
    if (searchVal) {
      getUserGists();
    } else {
      getGists();
    }
  }, [page, viewType]);

  useEffect(() => {
    getGists();
  }, []);

  const config = {
    headers: { authorization: `token ${user?.token}` },
  };

  const getGists = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/gists/public?per_page=9&page=${page}`
    );
    console.log(response);
    const data = response.data;
    if (data.length > 0) {
      setGists(data);
    }
    setLoading(false);
  };

  const getUserGists = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchVal}/gists?per_page=9&page=${page}`
      );
      console.log(response);
      setGists(response.data);
      setPage(1);
    } catch (e) {
      console.log(e);
    }
  };

  const handleKeypress = async (e) => {
    if (e.key === "Enter") {
      await getUserGists();
    }
  };

  return (
    <div>
      <Header
        searchVal={searchVal}
        handleSearchChange={handleSearchChange}
        handleSearch={getUserGists}
        handleKeyPress={handleKeypress}
      />
      <Container>
        {" "}
        <LandingScreen
          gists={gists}
          loading={loading}
          handleNextPage={handleNextPage}
          openGistDetails={openGistDetails}
          viewType={viewType}
          setViewType={setViewType}
          page={page}
          count={gists?.length}
          handleChangePage={handleChangePage}
        />
      </Container>
    </div>
  );
}
