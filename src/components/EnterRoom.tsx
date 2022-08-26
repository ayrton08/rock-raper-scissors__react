import { Grid, TextField, Button, Alert } from "@mui/material";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { setFirstRound, setPlayerOn, setRoomId } from "../store/game/gameSlice";
import { getRtdbRoomId, setPlay, setStatusPlayer } from "../store/game/thunks";
import { setNamePlayerTwo } from "../store/player/playerSlice";
import { useNavigate } from "react-router-dom";

const initialState: { code: string } = {
  code: "",
};

const initialStateName: { fullname: string } = {
  fullname: "",
};

export const EnterRoom = () => {
  const navigate = useNavigate();
  const { code, onInputChange } = useForm(initialState);
  const { fullname, onInputChange: inputName } = useForm(initialStateName);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const { roomId, rtdbRoomId, errorMessage } = useSelector(
    (state) => state.game
  );

  dispatch(setFirstRound(false));

  const onIntoRoom = () => {
    if (code.length <= 0) {
      return setError(true);
    }

    dispatch(setRoomId(code));
  };

  const start = () => {
    if (fullname.length <= 0) {
      return setError(true);
    }
    dispatch(setNamePlayerTwo(fullname));
    navigate("/game", { replace: true });
  };

  useEffect(() => {
    if (roomId) {
      dispatch(getRtdbRoomId(roomId));
    }
  }, [roomId]);

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
      <h3 className="your-name">Your Name</h3>
      <TextField
        type="text"
        placeholder="Your Name"
        fullWidth
        name="fullname"
        value={fullname}
        onChange={inputName}
      />
      <Grid container display={!!error ? "" : "none"} sx={{ mt: 1, mb: 1 }}>
        <Grid item xs={12}>
          <Alert severity="error">Insert a name</Alert>
        </Grid>
      </Grid>
      <Button onClick={start} sx={{ fontSize: "20px", border: "solid 1px" }}>
        <ArrowForwardTwoToneIcon />
        Start
      </Button>
    </Grid>
  );
};
