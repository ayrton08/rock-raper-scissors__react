import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { accessToRoom, askNewRoom } from "../store/game/thunks";
import { useEffect } from "react";
import { EnterRoom } from "../components/EnterRoom";
import { NewGame } from "../components/NewGame";
import { useAppDispatch } from "../hooks/useReduxTypes";
import { useStore } from "../hooks/useStore";
import { Intro } from "../components/Intro";

export const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { playerOn, player, userId, roomId } = useStore();

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

        {!playerOn && <Intro />}
      </Grid>
    </>
  );
};
