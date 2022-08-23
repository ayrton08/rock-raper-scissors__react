import { Button, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerOn } from "../store/game/gameSlice";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import { useForm } from "../hooks/useForm";
import { setNamePlayerOne } from "../store/player/playerSlice";
import { useNavigate } from "react-router-dom";
import { askNewRoom, signIn } from "../store/game/thunks";
import { useEffect } from "react";

const initialState: { fullname: string } = {
  fullname: "",
};

export const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { playerOn, player, userId } = useSelector((state) => state.game);

  const { fullname, onInputChange } = useForm(initialState);

  const newGame = () => {
    dispatch(setPlayerOn(1));
  };
  const startGame = () => {
    dispatch(setNamePlayerOne(fullname));
    dispatch(signIn(fullname));
  };

  const enterARoom = () => {
    // todo: la funcion que me permite entrar a la room
  };

  useEffect(() => {
    if (userId !== null) {
      dispatch(askNewRoom(userId));
      navigate("/game", { replace: true });
    }
  }, [userId]);

  return (
    <>
      <Grid container justifyContent="center" height="100vh">
        {playerOn ? (
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
              onChange={onInputChange}
            />
            <Button onClick={startGame}>
              <ArrowForwardTwoToneIcon />
              Start
            </Button>
          </Grid>
        ) : (
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            direction="column"
          >
            <h1>Welcome</h1>
            <Button onClick={newGame} variant="contained">
              New Game
            </Button>
            <Button onClick={enterARoom} variant="contained">
              Enter a Room
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};
