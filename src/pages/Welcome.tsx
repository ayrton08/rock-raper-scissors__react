import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerOn } from "../store/game/gameSlice";
import { useNavigate } from "react-router-dom";
import { accessToRoom, askNewRoom, getRtdbRoomId } from "../store/game/thunks";
import { useEffect, useState } from "react";
import { EnterRoom } from "../components/EnterRoom";
import { NewGame } from "../components/NewGame";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxTypes";

export const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { playerOn, player, userId, roomId } = useAppSelector(
    (state) => state.game
  );
  const [efect, setEfect] = useState("");

  const newGame = () => {
    setEfect("animate__animated animate__fadeOutUp");
    setTimeout(() => {
      dispatch(setPlayerOn(1));
    }, 200);
  };

  const enterARoom = () => {
    setEfect("animate__animated animate__fadeOutUp");
    setTimeout(() => {
      dispatch(setPlayerOn(2));
    }, 200);
  };

  useEffect(() => {
    if (userId !== null) {
      dispatch(askNewRoom(userId));
    }
  }, [userId]);

  useEffect(() => {
    if (roomId !== null && player === 1) {
      dispatch(accessToRoom(roomId, userId));

      navigate("/game", { replace: true });
    }
  }, [roomId]);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        height="100vh"
        className="welcome"
      >
        {playerOn && player === 1 && <NewGame />}
        {playerOn && player === 2 && <EnterRoom />}

        {!playerOn && (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            sx={{
              gap: "30px",
            }}
            className={efect}
          >
            <h1 className="title">Rock, paper or scissors</h1>
            <h3 className="efect-machine">Welcome, let's play...</h3>
            <Grid container justifyContent="center" sx={{ gap: "40px" }}>
              <Button
                onClick={newGame}
                variant="contained"
                sx={{
                  width: "200px",
                  height: "80px",
                  fontSize: "24px",
                  fontFamily: "Anton",
                }}
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
              >
                Enter a Room
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};
