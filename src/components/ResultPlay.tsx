import { Button, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWinner } from "../helpers";
import { useSetStatus } from "../hooks/useSetStatus";
import { cleanPlay } from "../store/game/gameSlice";

export const ResultPlay = () => {
  const dispatch = useDispatch();
  const { dataRoom, player, resultGame, setWhoWin } = useSetStatus();
  const navigate = useNavigate();

  const result = getWinner(dataRoom.jugador1.choise, dataRoom.jugador2.choise);
  useEffect(() => {
    if (result) {
      setWhoWin(result);
    }
  }, [result]);

  // todo : hacer los componentes de ganaste y perdiste

  const playAgain = () => {
    dispatch(cleanPlay());
    navigate("/game", { replace: true });
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        backgroundColor:
          resultGame === "win" && player === 1
            ? "green"
            : resultGame === "win" && player === 2
            ? "green"
            : resultGame === "tie"
            ? "orange"
            : "red",
      }}
    >
      <Grid>
        {resultGame === "win" ? (
          <div>Ganaste</div>
        ) : resultGame === "tie" ? (
          <div>Empate</div>
        ) : (
          <div>Perdiste</div>
        )}

        <Button variant="contained" onClick={playAgain}>
          Play Again
        </Button>
      </Grid>
    </Grid>
  );
};
