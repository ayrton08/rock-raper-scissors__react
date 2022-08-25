import { CircularProgress, Grid } from "@mui/material";
import { ResultPlay } from "../components/ResultPlay";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import NoteIcon from "@mui/icons-material/Note";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { useSetStatus } from "../hooks/useSetStatus";
import { useEffect, useState } from "react";
import { getWinner } from "../helpers";
import { Layout } from "../layout/Layaout";

export const Result = () => {
  const { dataRoom, setStatus, resultGame, setWhoWin, setHistoryGame, player } =
    useSetStatus();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);

  const result = getWinner(dataRoom.jugador1.choise, dataRoom.jugador2.choise);

  useEffect(() => {
    if (result) {
      setWhoWin(result);
    }
  }, [result]);

  useEffect(() => {
    setHistoryGame();
  }, [resultGame]);

  const play = {
    paper: <NoteIcon sx={{ fontSize: 150 }} />,
    scissor: <ContentCutIcon sx={{ fontSize: 150 }} />,
    rock: <Brightness1Icon sx={{ fontSize: 150 }} />,
  };

  useEffect(() => {
    if (dataRoom.jugador1.choise && dataRoom.jugador2.choise) {
      setStatus(false);
      setIsWaiting(false);
      setIsPlaying(true);
    }
  }, [resultGame]);

  setTimeout(() => {
    setIsPlaying(false);
  }, 4000);

  console.log({ dataRoom });

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
  ) : isWaiting ? (
    <Layout title="Time to wait">
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
            Waiting {dataRoom.jugador2.fullName} play...
          </h3>
        ) : (
          <h3 style={{ fontSize: "25px" }}>
            Waiting {dataRoom.jugador1.fullName} play...
          </h3>
        )}
        <CircularProgress color="success" />
      </Grid>
    </Layout>
  ) : (
    <ResultPlay />
  );
};
