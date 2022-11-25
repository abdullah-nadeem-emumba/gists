import React, { useState, useEffect, useContext } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

export default function Star({ id }) {
  const { user } = useContext(UserContext);

  const config = {
    headers: { authorization: `token ${user?.token}` },
  };
  const [starred, setStarred] = useState(false);

  useEffect(() => {
    isGistStarred(id);
  }, []);

  const isGistStarred = async (gistID) => {
    try {
      const response = await axios.get(
        `https://api.github.com/gists/${gistID}/star`,
        config
      );
      if (response.status === 204) {
        setStarred(true);
      }
    } catch (error) {
      setStarred(false);
    }
  };

  const starGist = async (gistID) => {
    setStarred(true);
    const response = await axios.put(
      `https://api.github.com/gists/${gistID}/star`,
      {
        gist_id: gistID,
      },
      config
    );
  };

  const unStarGist = async (gistID) => {
    setStarred(false);
    const response = await axios.delete(
      `https://api.github.com/gists/${gistID}/star`,
      config
    );
  };

  return starred ? (
    <StarIcon
      onClick={() => unStarGist(id)}
      sx={{ color: "#5acba1", cursor: "pointer" }}
    />
  ) : (
    <StarBorderIcon
      onClick={() => starGist(id)}
      sx={{ color: "#5acba1", cursor: "pointer" }}
    />
  );
}
