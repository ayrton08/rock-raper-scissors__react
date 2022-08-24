import { Button, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getWinner } from "../helpers";
import { useSetStatus } from "../hooks/useSetStatus";

export const ResultPlay = () => {
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
      }}
    >
      <Grid>
        {resultGame === "win" ? <div>Ganaste</div> : <div>Perdiste</div>}

        <Button variant="contained" onClick={playAgain}>
          PLay Again
        </Button>
      </Grid>
    </Grid>
  );
};
