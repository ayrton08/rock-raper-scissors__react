import { Button, CircularProgress, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { setNamePlayerOne } from "../store/player/playerSlice";
import { signIn } from "../store/game/thunks";
import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";

import { useAppDispatch } from "../hooks/useReduxTypes";
import { Back } from "../ui/components/Back";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./MyTextInput";
import { FullnameField } from "./FullnameField";

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
    <FullnameField submit={startGame} />
  );
};
