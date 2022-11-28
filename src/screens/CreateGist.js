import React from "react";
import TextField from "../components/FormField/FormField";
import styled from "styled-components";
import Button from "../components/Button/Button";
import axios from "axios";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { USER } from "../constants/constants";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "../layout/AppContainer/Container";
import Header from "../layout/Header/Header";

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

  const validationSchema = Yup.object({
    // filename: Yup.string().required("Required"),
    description: Yup.string()
      .required("Required")
      .min(4, "Description must be at least 4 characters"),
    // content: Yup.string()
    //   .required("Required")
    //   .min(5, "Content must be at least 5 characters"),
  });

  const initialValues = {
    files: [{ filename: "", content: "" }],
    description: "",
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

  const returnFiles = (filesArr) => {
    let files = {};
    filesArr.forEach((item) => {
      files[item.filename] = {
        content: item.content,
      };
    });
    return files;
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
      const data = {
        description: values.description,
        public: true,
        files: returnFiles(values.files),
      };
      const response = await axios.post(
        "https://api.github.com/gists",
        data,
        config
      );
      console.log(response);
    }
    navigate("/");
  };

  return (
    <div>
      <Header />
      <Container>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          render={({ values }) => (
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
                <FieldArray
                  name="files"
                  render={(arrayHelpers) => (
                    <>
                      {values.files.map((file, index) => {
                        return (
                          <div key={index}>
                            <div>
                              <TextField
                                name={`files[${index}].filename`}
                                id={`files[${index}].filename`}
                                customstyle="dark"
                                label={"Enter file name..."}
                                fullWidth
                                variant={"outlined"}
                                size="small"
                              />
                            </div>
                            <div>
                              <TextField
                                name={`files[${index}].content`}
                                id={`files[${index}].content`}
                                customstyle="dark"
                                label={"Enter file content..."}
                                variant={"outlined"}
                                multiline
                                rows={10}
                                fullWidth
                              />
                            </div>
                          </div>
                        );
                      })}
                      <StyledDiv>
                        <Button
                          onClick={() =>
                            arrayHelpers.push({ filename: "", content: "" })
                          }
                          customstyle="dark"
                        >
                          Add File
                        </Button>
                        <Button type={"submit"} customstyle="dark">
                          {state ? "Update Gist" : "Create Gist"}
                        </Button>
                      </StyledDiv>
                    </>
                  )}
                />
                <StyledDiv></StyledDiv>
              </FormContainer>
            </Form>
          )}
        ></Formik>
      </Container>
    </div>
  );
}
