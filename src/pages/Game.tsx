import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WaitRoom } from "../components/WaitRoom";
import { useListenRoom } from "../hooks/useListenRoom";
import { useSetStatus } from "../hooks/useSetStatus";
import { Layout } from "../layout/Layaout";
import { setPlayerOn } from "../store/game/gameSlice";

export const Game = () => {
  const { setStatus } = useSetStatus();
  const dispatch = useDispatch();
  const { roomId, player, rtdbRoomId, dataRoom, firstRound } = useSelector(
    (state) => state.game
  );

  const { fullnamePlayerTwo } = useSelector((state) => state.players);

  // useEffect(() => {
  //   setStatus(false);
  // }, [roomId]);

  useEffect(() => {
    if (firstRound) {
      setStatus(true);
    }
    // if (!!firstRound) {
    //   setStatus(false);
    // }
  }, []);

  useEffect(() => {
    if (!dataRoom.jugador1?.fullName) {
      setStatus(false);
    }
  }, [dataRoom]);

  useEffect(() => {
    if (fullnamePlayerTwo === dataRoom.jugador1?.fullName) {
      dispatch(setPlayerOn(1));
    }
  }, [dataRoom]);

  useListenRoom();

  return (
    <>
      <Layout title="Rock, paper or scissors">
        {!dataRoom.jugador1?.status || !dataRoom.jugador2?.status && firstRound? (
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            sx={{
              height: "100%",
            }}
          >
            <h2 className="animate__animated animate__fadeIn">
              Share the code: {roomId} with your opponent
            </h2>
          </Grid>
        ) : (
          <WaitRoom />
        )}
      </Layout>
    </>
  );
};
