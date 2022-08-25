import { Grid } from "@mui/material";
import { ResultPlay } from "../components/ResultPlay";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import NoteIcon from "@mui/icons-material/Note";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { useSetStatus } from "../hooks/useSetStatus";
import { useEffect, useState } from "react";
import { getWinner } from "../helpers";

export const Result = () => {
  const { dataRoom, setStatus, resultGame, setWhoWin, setHistoryGame } =
    useSetStatus();
  const [isPlaying, setIsPlaying] = useState(true);

  const result = getWinner(dataRoom.jugador1.choise, dataRoom.jugador2.choise);

  useEffect(() => {
    if (result) {
      setWhoWin(result);
    }
  }, [result]);

  useEffect(() => {
    setHistoryGame();
  }, [resultGame]);

  setStatus(false);

  const play = {
    paper: <NoteIcon sx={{ fontSize: 150 }} />,
    scissor: <ContentCutIcon sx={{ fontSize: 150 }} />,
    rock: <Brightness1Icon sx={{ fontSize: 150 }} />,
  };

  setTimeout(() => {
    setIsPlaying(false);
  }, 4000);

  return isPlaying ? (
    <Grid
      container
      justifyContent="space-between"
      direction="column"
      alignItems="center"
      sx={{ height: "100vh" }}
      className="welcome"
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
