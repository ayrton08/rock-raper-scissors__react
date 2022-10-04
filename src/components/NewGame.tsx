import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useForm } from "../hooks/useForm";
import { setNamePlayerOne } from "../store/player/playerSlice";
import { signIn } from "../store/game/thunks";
import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";

import { useAppDispatch } from "../hooks/useReduxTypes";
import { Back } from "../ui/components/Back";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./MyTextInput";

const initialState: { fullname: string } = {
  fullname: "",
};

export const NewGame = () => {
  const dispatch = useAppDispatch();
  const { roomId } = useStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startGame = (fullname: string) => {
    setIsLoading(true);
    dispatch(setNamePlayerOne(fullname));
    dispatch(signIn(fullname));
  };

  useEffect(() => {
    if (roomId) {
      setIsLoading(false);
    }
  }, [roomId]);

  return isLoading ? (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ gap: "50px" }}
      className="animate__animated animate__fadeIn"
    >
      <h4 style={{ fontSize: "30px" }}>Getting the code room</h4>
      <CircularProgress size="60px" />
    </Grid>
  ) : (
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
        initialValues={{ fullname: "" }}
        onSubmit={({ fullname }) => {
          startGame(fullname);
        }}
        validationSchema={Yup.object({
          fullname: Yup.string()
            .required("The name is required")
            .min(2, "Must contain at least 2 characters"),
        })}
      >
        {(formik) => (
          <Form className="form">
            <MyTextInput name="fullname" placeholder="Your Name" />
            <Button
              type="submit"
              sx={{ fontSize: "20px", border: "solid 1px" }}
            >
              Start
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};
