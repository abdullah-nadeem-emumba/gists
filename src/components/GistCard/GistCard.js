import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserInfo from "../UserInfo/UserInfo";
import { Card, CircularProgress, Typography } from "@mui/material";
import axios from "axios";

const GistDiv = styled.div`
  height: 12em;
  text-align: left;
  overflow: hidden;
`;

const StyledCard = styled(Card)`
  &&& {
    min-width: 14em;
    padding: 0 1em 0 1em;
    cursor: pointer;
  }
`;

const StyledText = styled(Typography)`
  &&& {
    font-size: 0.9em;
  }
`;

const LineNumberText = styled(Typography)`
  margin-right: 1.5em;
  color: #a7a7a7;
  &&& {
    font-size: 0.9em;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  column-gap: 1.2em;
  overflow: hidden;
  max-height: 1.5em;
`;

const TopBorderDiv = styled.div`
  margin-top: 0.5em;
  border-top: 1px solid #a7a7a7;
  padding-bottom: 0.5em;
`;

const CenterDiv = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function GistCard({ item, onCardClick }) {
  const [filecontent, setFileContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getFileContent();
  }, []);

  const getFileContent = async () => {
    if (item) {
      setLoading(true);
      try {
        const filename = Object.keys(item.files)[0];
        const response = await axios.get(item.files[filename].raw_url);
        const result = formatFileContent(response.data);
        setFileContent(result);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    }
  };

  const formatFileContent = (content) => {
    return JSON.stringify(content, null, 2).split(/\r?\n/);
  };

  const displayFileContent = () => {
    if (error) {
      return (
        <CenterDiv>
          <Typography>Unable to load gist...</Typography>
        </CenterDiv>
      );
    } else if (filecontent.length > 0) {
      return React.Children.toArray(
        filecontent.map((line, index) => {
          return (
            <FlexDiv>
              {" "}
              <LineNumberText>{index + 1}</LineNumberText>
              <StyledText>{line}</StyledText>
            </FlexDiv>
          );
        })
      );
    }
  };

  return (
    <StyledCard onClick={() => onCardClick(item)}>
      <GistDiv>
        {loading ? (
          <CenterDiv>
            <CircularProgress />
          </CenterDiv>
        ) : (
          displayFileContent()
        )}
      </GistDiv>
      <TopBorderDiv>
        <UserInfo item={item} />
      </TopBorderDiv>
    </StyledCard>
  );
}
