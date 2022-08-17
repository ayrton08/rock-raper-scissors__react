import { Button, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerOn } from "../store/game/gameSlice";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import { useForm } from "../hooks/useForm";
import { setNamePlayerOne } from "../store/player/playerSlice";
import { useNavigate } from "react-router-dom";
import { signIn } from "../store/game/thunks";

const initialState = {
  fullname: "",
};

export const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { playerOn, player } = useSelector((state) => state.game);
  console.log(player);

  const { fullname, onInputChange } = useForm(initialState);

  const newGame = () => {
    dispatch(setPlayerOn(1));
  };
  const startGame = () => {
    dispatch(setNamePlayerOne(fullname));
    signIn(player);
    navigate("/game", { replace: true });
  };

  const enterARoom = () => {
    // todo: la funcion que me permite entrar a la room
  };

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
