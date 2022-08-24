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

  return dataRoom.jugador1.online & dataRoom.jugador2.online ? (
    <ChoosePlay />
  ) : isWaiting ? (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{
        height: "500px",
        gap: "40px"
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
      sx={{ width: "100%", height: "500px", gap: "50px" }}
    >
      <h3>
        Press <strong>play</strong> to start
      </h3>
      <Button onClick={setOnline} variant="contained">
        Play
      </Button>
    </Grid>
  );
};
