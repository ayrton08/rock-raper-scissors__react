import { Button, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSetStatus } from "../hooks/useSetStatus";
import { ChoosePlay } from "./ChoosePlay";

export const WaitRoom = () => {
  const { dataRoom, setStatus, player } = useSetStatus();
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    setStatus(false);
  }, []);

  const setOnline = () => {
    setIsWaiting(true);
    setStatus(true);
  };
  console.log({ dataRoom });

  return dataRoom.jugador1.online & dataRoom.jugador2.online ? (
    <ChoosePlay />
  ) : isWaiting ? (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{
        height: "100vh",
      }}
    >
      {player === 1 ? (
        <h3>Waiting {dataRoom.jugador2.fullName}... press play</h3>
      ) : (
        <h3>Waiting {dataRoom.jugador1.fullName}... press play</h3>
      )}
      <CircularProgress color="success" />
    </Grid>
  ) : (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "100%", height: "100vh", gap: "50px" }}
    >
      <h3>Presione Jugar</h3>
      <Button onClick={setOnline} variant="contained">
        Jugar
      </Button>
    </Grid>
  );
};
