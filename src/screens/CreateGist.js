import React from "react";
import TextField from "../components/TextField/TextField";
import styled from "styled-components";
import Button from "../components/Button/Button";

const FormContainer = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  row-gap: 1.5em;
  padding-right: 0.5em;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 1em;
`;

export default function CreateGist() {
  return (
    <FormContainer>
      <TextField
        type="dark"
        label={"Enter gist description..."}
        fullWidth
        variant={"outlined"}
        size="small"
      />
      <TextField
        type="dark"
        label={"Enter file name..."}
        fullWidth
        variant={"outlined"}
        size="small"
      />
      <TextField
        type="dark"
        label={"Enter file content..."}
        fullWidth
        variant={"outlined"}
        multiline
        rows={10}
      />
      <StyledDiv>
        <Button type="dark">Add File</Button>
        <Button type="dark">Create Gist</Button>
      </StyledDiv>
    </FormContainer>
  );
}
