import React from "react";
import TextField from "../components/FormField/FormField";
import styled from "styled-components";
import Button from "../components/Button/Button";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { USER } from "../constants/constants";
import { useNavigate, useLocation } from "react-router-dom";

const FormContainer = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
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
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log("State", state);

  const validationSchema = Yup.object({
    filename: Yup.string().required("Required"),
    description: Yup.string()
      .required("Required")
      .min(4, "Description must be at least 4 characters"),
    content: Yup.string()
      .required("Required")
      .min(5, "Content must be at least 5 characters"),
  });

  const initialValues = {
    filename: "",
    description: "",
    content: "",
  };
  const formatFileContent = (content) => {
    return content.join("\n");
  };

  if (state) {
    initialValues.description = state.description;
    initialValues.filename = state.filename;
    initialValues.content = formatFileContent(state.content);
  }

  const config = {
    headers: { authorization: `token ${USER.token}` },
  };

  const onSubmit = async (values) => {
    if (state) {
      const response = await axios.patch(
        `https://api.github.com/gists/${state.id}`,
        {
          gist_id: state.id,
          description: values.description,
          files: {
            [values.filename]: {
              content: values.content,
            },
          },
        },
        config
      );
      console.log(response);
    } else {
      const response = await axios.post(
        "https://api.github.com/gists",
        {
          description: values.description,
          public: true,
          files: {
            [values.filename]: {
              content: values.content,
            },
          },
        },
        config
      );
    }
    navigate("/");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <FormContainer>
          <div>
            <TextField
              name={"description"}
              id={"description"}
              customstyle="dark"
              label={"Enter description..."}
              fullWidth
              variant={"outlined"}
              size="small"
            />
          </div>
          <div>
            <TextField
              name={"filename"}
              id={"filename"}
              customstyle="dark"
              label={"Enter file name..."}
              fullWidth
              variant={"outlined"}
              size="small"
            />
          </div>
          <div>
            <TextField
              name={"content"}
              id={"content"}
              customstyle="dark"
              label={"Enter file content..."}
              variant={"outlined"}
              multiline
              rows={10}
              fullWidth
            />
          </div>
          <StyledDiv>
            <Button customstyle="dark">Add File</Button>
            <Button type={"submit"} customstyle="dark">
              {state ? "Update Gist" : "Create Gist"}
            </Button>
          </StyledDiv>
        </FormContainer>
      </Form>
    </Formik>
  );
}
