import { Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Back } from "../ui/components/Back";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./MyTextInput";

interface Props {
  submit: Function;
}

const initialValues = { fullname: "" };

const validate = Yup.object({
  fullname: Yup.string()
    .required("The name is required")
    .min(2, "Must contain at least 2 characters"),
});

export const FullnameField = ({ submit }: Props) => {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignSelf="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "500px", height: "400px", margin: "20px" }}
      className="animate__animated animate__fadeInUp glass-efect"
    >
      <Back>
        <ArrowBackIcon fontSize="large" />
      </Back>

      <Formik
        initialValues={initialValues}
        onSubmit={({ fullname }) => {
          submit(fullname);
        }}
        validationSchema={validate}
      >
        {({ values, handleChange }) => (
          <Form className="form" id="form-name">
            <h3 className="your-name">Your Name</h3>

            <MyTextInput
              name="fullname"
              placeholder="Your Name"
              onChange={handleChange}
              data-test="fullname"
            />
            <Button
              type="submit"
              sx={{ fontSize: "20px", border: "solid 1px" }}
              data-test="save-name"
            >
              Start
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};
