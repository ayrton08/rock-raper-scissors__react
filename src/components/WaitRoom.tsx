import { Button, Grid } from "@mui/material";
import { useSetStatus } from "../hooks/useSetStatus";
import { ChoosePlay } from "./ChoosePlay";

export const WaitRoom = () => {
  const { dataRoom, setStatus } = useSetStatus();

  setStatus(true);

  const setOnline = () => {
    console.log("soy el button jugar");
    console.log({ dataRoom });
  };

  return dataRoom.jugador1 && dataRoom.jugador2 ? (
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
