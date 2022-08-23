import { Button, Grid } from "@mui/material";
import { useSetStatus } from "../hooks/useSetStatus";
import { ChoosePlay } from "./ChoosePlay";

export const WaitRoom = () => {
  const { dataRoom, setStatus, player } = useSetStatus();

  if (player === 1) {
    setStatus(true);
  }

  const setOnline = () => {
    setStatus(true);
  };

  return dataRoom.jugador1.online & dataRoom.jugador2.online ? (
    <ChoosePlay />
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
