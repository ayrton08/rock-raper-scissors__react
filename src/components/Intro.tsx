import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { setPlayerOn } from "../store/game/gameSlice";
import { useAppDispatch } from "../hooks/useReduxTypes";

export const Intro = () => {
  const dispatch = useAppDispatch();
  const [display, setDisplay] = useState("");

  const [efect, setEfect] = useState<string>("");

  const newGame = (): void => {
    setEfect("animate__animated animate__fadeOutUp");
    setTimeout(() => {
      setDisplay("none");
      dispatch(setPlayerOn(1));
    }, 200);
  };

  const enterARoom = (): void => {
    setEfect("animate__animated animate__fadeOutUp");
    setTimeout(() => {
      dispatch(setPlayerOn(2));
    }, 200);
  };

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      alignContent="center"
      alignSelf="center"
      textAlign="center"
      direction="column"
      sx={{
        height: "100%",
      }}
      className={efect}
      data-test="intro-comp"
    >
      <h1 className="title" data-test="intro-title">
        Rock, paper or scissors
      </h1>
      <h3 className="efect-machine">Welcome, let's play...</h3>
      <Grid
        container
        justifyContent="center"
        sx={{ gap: "30px" }}
        display={display}
        data-test="intro-buttons"
      >
        <Button
          onClick={newGame}
          variant="contained"
          sx={{
            width: "200px",
            height: "80px",
            fontSize: "24px",
            fontFamily: "Anton",
          }}
          data-test="new-game"
        >
          New Game
        </Button>
        <Button
          onClick={enterARoom}
          variant="contained"
          sx={{
            width: "200px",
            height: "80px",
            fontSize: "24px",
            fontFamily: "Anton",
          }}
          data-test="enter-room"
        >
          Enter a Room
        </Button>
      </Grid>
    </Grid>
  );
};
