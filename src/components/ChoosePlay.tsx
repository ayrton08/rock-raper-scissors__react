import { Button, Grid } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import NoteIcon from "@mui/icons-material/Note";
import { useDispatch, useSelector } from "react-redux";
import { useSetStatus } from "../hooks/useSetStatus";
import { setPlay } from "../store/game/thunks";
import { useEffect, useState } from "react";
import { setMyPlay } from "../store/game/gameSlice";

export const ChoosePlay = () => {
  const dispatch = useDispatch();
  const { dataRoom, player, rtdbRoomId, myPlay } = useSetStatus();
  const [name, setName] = useState("");
  const [gamble, setGamble] = useState("");

  useEffect(() => {
    if (player === 1) {
      setName(dataRoom.jugador1.fullName);
    } else {
      setName(dataRoom.jugador2.fullName);
    }
  }, []);

  const navigate = useNavigate();

  // useEffect(()=>{
    
  //   if(myPlay !== ""){

  //   }
  //   setTimeout(() => {
  //     navigate("/result", { replace: true });
  //   }, 5000);

  // },[])

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
        sx={{ height: "100vh" }}
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

        <Grid container justifyContent="center" sx={{ gap: "50px" }}>
          <Button onClick={() => setGamble("rock")}>
            <Brightness1Icon sx={{ fontSize: 100 }} />
          </Button>

          <Button onClick={() => setGamble("paper")}>
            <NoteIcon sx={{ fontSize: 100 }} />
          </Button>

          <Button onClick={() => setGamble("scissor")}>
            <ContentCutIcon sx={{ fontSize: 100 }} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
