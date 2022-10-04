import { Grid, TextField, Button, Alert } from "@mui/material";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { setFirstRound, setPlayerOn, setRoomId } from "../store/game/gameSlice";
import { getRtdbRoomId } from "../store/game/thunks";
import {
  setNamePlayerTwo,
  setNamePlayerOne,
} from "../store/player/playerSlice";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../hooks/useReduxTypes";
import { useStore } from "../hooks/useStore";

import { useListenRoom } from "../hooks/useListenRoom";
import { Back } from "../ui/components/Back";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./MyTextInput";
import { FullnameField } from "./FullnameField";

export const EnterRoom = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { roomId, rtdbRoomId, dataRoom } = useStore();

  const onIntoRoom = (code: string) => {
    dispatch(setFirstRound(false));
    dispatch(setRoomId(code));
  };

  const start = (fullname: string) => {
    if (fullname === dataRoom.jugador1?.name) {
      dispatch(setPlayerOn(1));
      dispatch(setNamePlayerOne(fullname));
      return navigate("/game", { replace: true });
    }

    if (fullname === dataRoom.jugador2?.name || !dataRoom.jugador2) {
      dispatch(setPlayerOn(2));
      dispatch(setNamePlayerTwo(fullname));
      return navigate("/game", { replace: true });
    }
  };

  useEffect(() => {
    if (roomId) {
      dispatch(getRtdbRoomId(roomId));
    }
  }, [roomId]);

  useListenRoom();

  return !rtdbRoomId ? (
    <Grid
      container
      justifyContent="space-evenly"
      alignSelf="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "500px", height: "400px" }}
      className="animate__animated animate__fadeInUp glass-efect"
    >
      <Back>
        <ArrowBackIcon fontSize="large" />
      </Back>
      <h3 className="your-name">Code Room</h3>

      <Formik
        initialValues={{ code: "" }}
        onSubmit={({ code }) => {
          console.log(code);
          onIntoRoom(code);
        }}
        validationSchema={Yup.object({
          code: Yup.string()
            .required("The code room is required")
            .max(4, "Must not exceed 4 characters"),
        })}
      >
        {(formik) => (
          <Form className="form">
            <MyTextInput name="code" placeholder="Code Room" />
            <Button
              sx={{ fontSize: "20px", border: "solid 1px" }}
              type="submit"
            >
              Enter
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  ) : (
    <FullnameField submit={start} />
  );
};
