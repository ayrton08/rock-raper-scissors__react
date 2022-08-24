import { Button, Grid } from "@mui/material";
import { ResultPlay } from "../components/ResultPlay";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import NoteIcon from "@mui/icons-material/Note";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { useSetStatus } from "../hooks/useSetStatus";
import { useState } from "react";

export const Result = () => {
  const { dataRoom, setStatus } = useSetStatus();
  const [isPlaying, setIsPlaying] = useState(true);

  setStatus(false);

  const play = {
    paper: <NoteIcon sx={{ fontSize: 100 }} />,
    scissor: <ContentCutIcon sx={{ fontSize: 100 }} />,
    rock: <Brightness1Icon sx={{ fontSize: 100 }} />,
  };

  setTimeout(() => {
    setIsPlaying(false);
  }, 4000);

  // todo: primero mostrar las dos jugadas y luego el resultado final del ganador y el componente del history
  return isPlaying ? (
    <Grid
      container
      justifyContent="space-between"
      direction="column"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid
        item
        className="img-thumbnail animate__animated animate__fadeInDown"
      >
        {play[dataRoom.jugador2.choise]}
      </Grid>
      <Grid item className="img-thumbnail animate__animated animate__fadeInUp">
        {play[dataRoom.jugador1.choise]}
      </Grid>
    </Grid>
  ) : (
    <ResultPlay />
  );
};
