import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WaitRoom } from "../components/WaitRoom";
import { useListenRoom } from "../hooks/useListenRoom";
import { useSetStatus } from "../hooks/useSetStatus";
import { Layout } from "../layout/Layaout";

export const Game = () => {
  const { setStatus } = useSetStatus();
  const { roomId, player, rtdbRoomId, dataRoom } = useSelector(
    (state) => state.game
  );

  useEffect(() => {
    setStatus(false);
  }, []);

  useEffect(() => {
    if (!dataRoom.jugador1?.fullName) {
      setStatus(false);
    }
  }, [dataRoom]);

  useListenRoom();

  return (
    <>
      <Layout title="Rock, paper or scissors">
        {dataRoom.jugador1?.status & dataRoom.jugador2?.status ? (
          <WaitRoom />
        ) : (
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
        )}
      </Layout>
    </>
  );
};
