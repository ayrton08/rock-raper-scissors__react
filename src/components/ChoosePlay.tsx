import { Button, Grid } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import NoteIcon from "@mui/icons-material/Note";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSetStatus } from "../hooks/useSetStatus";
import { setPlay } from "../store/game/thunks";
import { useEffect, useState } from "react";
import { setMyPlay } from "../store/game/gameSlice";
import Divider from "@mui/material/Divider";

export const ChoosePlay = () => {
  const dispatch = useDispatch();
  const { dataRoom, player, rtdbRoomId, myPlay } = useSetStatus();
  const [name, setName] = useState("");
  const [gamble, setGamble] = useState("");
  const navigate = useNavigate();
  const [efectRock, setEfectRock] = useState("");
  const [efectPaper, setEfectPaper] = useState("");
  const [efectSccisor, setEfectSccisor] = useState("");
  const [selectedRock, setSelectedRock] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState(false);
  const [selectedSccisor, setSelectedSccisor] = useState(false);

  useEffect(() => {
    if (player === 1) {
      setName(dataRoom.jugador1.fullName);
    } else {
      setName(dataRoom.jugador2.fullName);
    }
  }, []);

  useEffect(() => {
    if (myPlay !== "") {
    }
    setTimeout(() => {
      navigate("/result", { replace: true });
      setSelectedPaper(false);
      setSelectedRock(false);
      setSelectedSccisor(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (gamble !== "") {
      dispatch(setMyPlay(gamble));

      const params = {
        name,
        choise: gamble,
        player,
        rtdbRoomId,
      };

      dispatch(setPlay(params));
    }
  }, [gamble]);

  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        direction="column"
        sx={{ height: "100%" }}
      >
        <Grid container justifyContent="center">
          <CountdownCircleTimer
            isPlaying
            duration={5}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </Grid>

        <Divider variant="middle" />
        <Grid container justifyContent="center" sx={{ gap: "50px" }}>
          <Button
            onClick={() => {
              setGamble("rock");
              setEfectRock("animate__animated animate__shakeY");
              setSelectedRock(true);
            }}
            className={efectRock}
            sx={{
              backgroundColor: selectedRock ? "green" : "",
            }}
          >
            <Brightness1Icon sx={{ fontSize: 100 }} />
          </Button>

          <Button
            onClick={() => {
              setGamble("paper");
              setEfectPaper("animate__animated animate__shakeY");
              setSelectedPaper(true);
            }}
            className={efectPaper}
            sx={{
              backgroundColor: selectedPaper ? "green" : "",
            }}
          >
            <NoteIcon sx={{ fontSize: 100 }} />
          </Button>

          <Button
            onClick={() => {
              setGamble("scissor");
              setEfectSccisor("animate__animated animate__shakeY");
              setSelectedSccisor(true);
            }}
            className={efectSccisor}
            sx={{
              backgroundColor: selectedSccisor ? "green" : "",
            }}
          >
            <ContentCutIcon sx={{ fontSize: 100 }} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
