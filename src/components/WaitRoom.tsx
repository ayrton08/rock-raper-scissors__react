import { Button, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import { useStore } from "../hooks/useStore";
import { ChoosePlay } from "./ChoosePlay";

export const WaitRoom = () => {
  const { dataRoom, setStatus, player } = useStore();
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  const setOnline = () => {
    setIsWaiting(true);
    setStatus(true);
  };

  return dataRoom.jugador1?.online && dataRoom.jugador2?.online ? (
    <ChoosePlay />
  ) : isWaiting ? (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      direction="column"
      sx={{
        height: "100%",
        gap: "40px",
      }}
    >
      {player === 1 ? (
        <h3 style={{ fontSize: "25px" }}>
          Waiting {dataRoom.jugador2?.name || dataRoom.jugador2?.fullName}...
          press play
        </h3>
      ) : (
        <h3 style={{ fontSize: "25px" }}>
          Waiting {dataRoom.jugador1?.fullName}... press play
        </h3>
      )}
      <CircularProgress color="success" />
    </Grid>
  ) : (
    <Grid
      container
      justifyContent="space-evenly"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "100%", height: "100%", gap: "50px" }}
    >
      <h3 style={{ fontSize: "25px" }}>
        Press{" "}
        <i style={{ color: "green", cursor: "pointer" }} onClick={setOnline}>
          play
        </i>{" "}
        to start
      </h3>
      <Button
        onClick={setOnline}
        variant="contained"
        style={{
          fontSize: "20px",
          width: "120px",
          fontFamily: "Anton",
          letterSpacing: "2px",
        }}
        data-test="button-play"
      >
        Play
      </Button>
    </Grid>
  );
};
