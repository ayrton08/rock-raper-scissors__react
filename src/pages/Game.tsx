import { Grid } from "@mui/material";
import { useEffect } from "react";
import { WaitRoom } from "../components/WaitRoom";
import { useListenRoom } from "../hooks/useListenRoom";
import { useStore } from "../hooks/useStore";
import { Layout } from "../layout/Layaout";
import { setPlayerOn } from "../store/game/gameSlice";
import { useAppDispatch } from "../hooks/useReduxTypes";

export const Game = () => {
  const dispatch = useAppDispatch();
  const { setStatus, roomId, dataRoom, firstRound, fullnamePlayerTwo, player } =
    useStore();

  useEffect(() => {
    setStatus(false);
  }, [firstRound]);

  useEffect(() => {
    if (!dataRoom.jugador1?.fullName) {
      setStatus(false);
    }
  }, [dataRoom]);

  // useEffect(() => {
  //   if (fullnamePlayerTwo === dataRoom.jugador1?.fullName) {
  //     dispatch(setPlayerOn(1));
  //   }
  // }, [dataRoom]);

  useListenRoom();

  return (
    <>
      <Layout title="Rock, paper or scissors">
        {!dataRoom.jugador1?.status ||
        (!dataRoom.jugador2?.status && firstRound) ? (
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
