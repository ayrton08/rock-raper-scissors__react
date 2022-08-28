import { Grid } from "@mui/material";
import { useStore } from "../../hooks/useStore";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import NoteIcon from "@mui/icons-material/Note";
import ContentCutIcon from "@mui/icons-material/ContentCut";

export const Playing = () => {
  const { dataRoom, player } = useStore();

  const play: any = {
    paper: <NoteIcon sx={{ fontSize: 150 }} />,
    scissor: <ContentCutIcon sx={{ fontSize: 150 }} />,
    rock: <Brightness1Icon sx={{ fontSize: 150 }} />,
  };

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        direction="column"
        alignItems="center"
        sx={{ height: "100vh" }}
        className="welcome"
      >
        <Grid item className="animate__animated animate__fadeInDown">
          {player === 1
            ? play[dataRoom.jugador2.choise]
            : play[dataRoom.jugador1.choise]}
        </Grid>
        <Grid item className=" animate__animated animate__fadeInUp">
          {player === 2
            ? play[dataRoom.jugador2.choise]
            : play[dataRoom.jugador1.choise]}
        </Grid>
      </Grid>
    </>
  );
};
