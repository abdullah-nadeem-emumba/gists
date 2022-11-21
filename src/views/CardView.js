import React from "react";
import styled from "styled-components";
import GistCard from "../components/GistCard/GistCard";

const StyledDivWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5em;
  margin-top: 2em;
`;

export default function CardView({ gists, onCardClick }) {
  return (
    <StyledDivWrapper>
      {gists &&
        gists.length > 0 &&
        gists.map((item) => {
          return (
            <GistCard key={item.id} item={item} onCardClick={onCardClick} />
          );
        })}
    </StyledDivWrapper>
  );
}
