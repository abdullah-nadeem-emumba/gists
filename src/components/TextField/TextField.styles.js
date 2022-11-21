import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: ${(props) => (props.type === "light" ? "#FFF" : "#a7a7a7")};
  }
  & label {
    color: ${(props) => (props.type === "light" ? "#FFF" : "#a7a7a7")};
    font-weight: 10px;
  }
  & .MuiOutlinedInput-root {
    width: ${(props) => (props.fullWidth ? "100%" : "25em")};
    & fieldset {
      border-color: ${(props) => (props.type === "light" ? "#FFF" : "#a7a7a7")};
    }
    &:hover fieldset {
      border-color: ${(props) => (props.type === "light" ? "#FFF" : "#a7a7a7")};
    }
    &.Mui-focused fieldset {
      border-color: ${(props) => (props.type === "light" ? "#FFF" : "#a7a7a7")};
    }
  }
`;
