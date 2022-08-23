import { Grid, TextField, Button } from "@mui/material";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { setRoomId } from "../store/game/gameSlice";
import { getRtdbRoomId, setStatusPlayer } from "../store/game/thunks";
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

  const { playerOn, player, userId, roomId, rtdbRoomId } = useSelector(
    (state) => state.game
  );

  const onIntoRoom = () => {
    dispatch(setRoomId(code));
  };

  const start = () => {
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
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "500px" }}
    >
      <h3>Code Room</h3>
      <TextField
        type="text"
        placeholder="Code Room"
        fullWidth
        name="code"
        value={code}
        onChange={onInputChange}
      />
      <Button onClick={onIntoRoom}>Enter</Button>
    </Grid>
  ) : (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "500px" }}
    >
      <h3>Your Name</h3>
      <TextField
        type="text"
        placeholder="Your Name"
        fullWidth
        name="fullname"
        value={fullname}
        onChange={inputName}
      />
      <Button onClick={start}>
        <ArrowForwardTwoToneIcon />
        Start
      </Button>
    </Grid>
  );
};
