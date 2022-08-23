import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerOn } from "../store/game/gameSlice";
import { useNavigate } from "react-router-dom";
import { accessToRoom, askNewRoom, getRtdbRoomId } from "../store/game/thunks";
import { useEffect } from "react";
import { EnterRoom } from "../components/EnterRoom";
import { NewGame } from "../components/NewGame";

export const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { playerOn, player, userId, roomId } = useSelector(
    (state) => state.game
  );

  const newGame = () => {
    dispatch(setPlayerOn(1));
  };

  const enterARoom = () => {
    dispatch(setPlayerOn(2));
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
      <Grid container justifyContent="center" height="100vh">
        {playerOn && player === 1 && <NewGame />}
        {playerOn && player === 2 && <EnterRoom />}

        {!playerOn && (
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            direction="column"
            sx={{
              gap: "30px",
            }}
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
