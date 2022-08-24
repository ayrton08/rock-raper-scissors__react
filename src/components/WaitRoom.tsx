import { Button, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSetStatus } from "../hooks/useSetStatus";
import { ChoosePlay } from "./ChoosePlay";

export const WaitRoom = () => {
  const { dataRoom, setStatus, player } = useSetStatus();
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (player === 1) {
      setStatus(false);
    }
  }, []);

  const setOnline = () => {
    setIsWaiting(true);
    setStatus(true);
  };

  return dataRoom.jugador1.online & dataRoom.jugador2.online ? (
    <ChoosePlay />
  ) : isWaiting ? (
    <Grid
      container
      justifyContent="center"
      direction="column"
      sx={{
        height: "100vh",
      }}
    >
      // todo: colocar el nombre del oponente
      <h3>Waiting the opponent...</h3>
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
