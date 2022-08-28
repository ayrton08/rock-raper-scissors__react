import { Button, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import { useStore } from "../hooks/useStore";
import { ChoosePlay } from "./ChoosePlay";

export const WaitRoom = () => {
  const { dataRoom, setStatus, player } = useStore();
  const [isWaiting, setIsWaiting] = useState(false);

  const setOnline = () => {
    setIsWaiting(true);
    setStatus(true);
  };

  return dataRoom.jugador1?.online && dataRoom.jugador2?.online ? (
    <ChoosePlay />
  ) : isWaiting ? (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{
        height: "500px",
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
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "100%", height: "500px", gap: "50px" }}
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
      >
        Play
      </Button>
    </Grid>
  );
};
