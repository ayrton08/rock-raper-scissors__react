import { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import NoteIcon from "@mui/icons-material/Note";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { useNavigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { setPlay } from "../store/game/thunks";
import { setMyPlay } from "../store/game/gameSlice";
import Divider from "@mui/material/Divider";
import Swal from "sweetalert2";

import { useAppDispatch } from "../hooks/useReduxTypes";

export const ChoosePlay = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { dataRoom, player, rtdbRoomId, myPlay } = useStore();
  const [name, setName] = useState<string>("");
  const [gamble, setGamble] = useState<string>("");
  const [efectRock, setEfectRock] = useState<string>("");
  const [efectPaper, setEfectPaper] = useState<string>("");
  const [efectSccisor, setEfectSccisor] = useState<string>("");
  const [selectedRock, setSelectedRock] = useState<boolean>(false);
  const [selectedPaper, setSelectedPaper] = useState<boolean>(false);
  const [selectedSccisor, setSelectedSccisor] = useState<boolean>(false);

  useEffect(() => {
    if (player === 1) {
      setName(dataRoom.jugador1.fullName);
    } else {
      setName(dataRoom.jugador2.fullName);
    }
  }, []);

  setTimeout(() => {
    if (myPlay) {
      navigate("/result", { replace: true });
    }
  }, 5000);

  useEffect(() => {
    if (myPlay) {
      setTimeout(() => {
        navigate("/result", { replace: true });
      }, 1000);
    }
  }, [myPlay]);

  useEffect(() => {
    if (location.pathname === "/result") {
      setSelectedPaper(false);
      setSelectedRock(false);
      setSelectedSccisor(false);
    }
  }, [myPlay]);

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
        sx={{ height: "100%", width: "100%" }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          height="100%"
        >
          <Grid alignSelf="center" sx={{ paddingBottom: { xs: 4, md: 8 } }}>
            <CountdownCircleTimer
              isPlaying
              duration={5}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[7, 5, 2, 0]}
              strokeWidth={15}
              onComplete={(): any => {
                if (!myPlay) {
                  return Swal.fire(
                    "Time Over",
                    "Try again, don't forget to play",
                    "error"
                  );
                }
              }}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </Grid>

          <Divider variant="middle" />
          <Grid container justifyContent="space-evenly">
            <Button
              onClick={() => {
                setSelectedRock(true);
                setGamble("rock");
                setEfectRock("animate__animated animate__shakeY");
              }}
              className={efectRock}
              sx={{
                backgroundColor: selectedRock ? "green" : "",
              }}
              disabled={selectedPaper && selectedRock && selectedSccisor}
              data-test="rock"
            >
              <Brightness1Icon sx={{ fontSize: { md: 100, xs: 70 } }} />
            </Button>

            <Button
              onClick={() => {
                setSelectedPaper(true);
                setGamble("paper");
                setEfectPaper("animate__animated animate__shakeY");
              }}
              className={efectPaper}
              sx={{
                backgroundColor: selectedPaper ? "green" : "",
              }}
              disabled={selectedPaper && selectedRock && selectedSccisor}
              data-test="paper"
            >
              <NoteIcon sx={{ fontSize: { md: 100, xs: 70 } }} />
            </Button>

            <Button
              onClick={() => {
                setSelectedSccisor(true);
                setGamble("scissor");
                setEfectSccisor("animate__animated animate__shakeY");
              }}
              className={efectSccisor}
              sx={{
                backgroundColor: selectedSccisor ? "green" : "",
              }}
              disabled={selectedPaper && selectedRock && selectedSccisor}
              data-test="scissor"
            >
              <ContentCutIcon sx={{ fontSize: { md: 100, xs: 70 } }} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
