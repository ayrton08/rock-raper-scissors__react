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

const initialState: { code: string } = {
  code: "",
};

const initialStateName: { fullname: string } = {
  fullname: "",
};

export const EnterRoom = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();
  const { code, onInputChange } = useForm(initialState);
  const { fullname, onInputChange: inputName } = useForm(initialStateName);

  const { roomId, rtdbRoomId, errorMessage, dataRoom, setStatus } = useStore();

  const onIntoRoom = () => {
    if (code.length <= 0) {
      return setError(true);
    }
    dispatch(setFirstRound(false));
    dispatch(setRoomId(code));
  };

  const start = () => {
    if (fullname.length <= 0) {
      return setError(true);
    }
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

    setError(true);
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
      <TextField
        type="number"
        placeholder="Code Room"
        fullWidth
        name="code"
        value={code}
        onChange={onInputChange}
        autoComplete="off"
        sx={{
          width: "200px",
        }}
      />

      <Grid
        container
        display={errorMessage ? "" : "none"}
        sx={{ mt: 1, mb: 1 }}
      >
        <Grid item xs={12}>
          <Alert severity="error">{errorMessage}</Alert>
        </Grid>
      </Grid>

      <Grid container display={!!error ? "" : "none"} sx={{ mt: 1, mb: 1 }}>
        <Grid item xs={12}>
          <Alert severity="error">Insert a code room</Alert>
        </Grid>
      </Grid>

      <Button
        onClick={onIntoRoom}
        sx={{ fontSize: "20px", border: "solid 1px" }}
      >
        Enter
      </Button>
    </Grid>
  ) : (
    <Grid
      container
      justifyContent="space-evenly"
      alignSelf="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "500px", height: "400px" }}
      className="glass-efect"
    >
      <Back>
        <ArrowBackIcon fontSize="large" />
      </Back>
      <h3 className="your-name">Your Name</h3>
      <TextField
        type="text"
        placeholder="Your Name"
        fullWidth
        name="fullname"
        value={fullname}
        onChange={inputName}
        autoComplete="off"
      />
      <Grid container display={!!error ? "" : "none"} sx={{ mt: 1, mb: 1 }}>
        <Grid item xs={12}>
          <Alert severity="error">Insert a valid name</Alert>
        </Grid>
      </Grid>
      <Button onClick={start} sx={{ fontSize: "20px", border: "solid 1px" }}>
        <ArrowForwardTwoToneIcon />
        Start
      </Button>
    </Grid>
  );
};
