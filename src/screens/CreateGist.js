import React, { useState } from "react";
import TextField from "../components/FormField/FormField";
import styled from "styled-components";
import Button from "../components/Button/Button";
import axios from "axios";
import { useFormik, ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

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
  const [gistData, setGistData] = useState({
    filename: "",
    description: "",
    content: "",
  });

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

  const onSubmit = (values) => {
    console.log(values);
  };

  // const formik = useFormik({
  //   initialValues: {},
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  //   validationSchema,
  // });

  const updateState = (data) => {
    setGistData({ ...gistData, ...data });
  };

  const createGist = async () => {
    const response = await axios.post("https://api.github.com/gists", {
      description: gistData.description,
      public: true,
      files: {
        [gistData.filename]: {
          content: gistData.content,
        },
      },
    });
    console.log(response);
  };

  const handleChange = (e) => {
    updateState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(gistData);
  };

  //console.log(formik.values);

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
            {/* <ErrorMessage name="content" /> */}
          </div>
          <StyledDiv>
            <Button customstyle="dark">Add File</Button>
            <Button type={"submit"} customstyle="dark">
              Create Gist
            </Button>
          </StyledDiv>
        </FormContainer>
      </Form>
    </Formik>
  );
}
