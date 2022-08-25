import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSetStatus } from "../hooks/useSetStatus";
import { cleanPlay } from "../store/game/gameSlice";

export const ResultPlay = () => {
  const dispatch = useDispatch();
  const { dataRoom, player, resultGame, setWhoWin } = useSetStatus();
  const navigate = useNavigate();

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
      className={
        resultGame === "win" && player === 1
          ? "winner"
          : resultGame === "win" && player === 2
          ? "winner"
          : resultGame === "tie"
          ? "tie"
          : "loser"
      }
      sx={{
        height: "100vh",
      }}
    >
      <Grid>
        {resultGame === "win" ? (
          <>
            <div className="pyro">
              <div className="before"></div>
              <div className="after"></div>
              <div>Ganaste</div>
            </div>
          </>
        ) : resultGame === "tie" ? (
          <div>Empate</div>
        ) : (
          <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
            <div>Perdiste</div>
          </div>
        )}

        <Button variant="contained" onClick={playAgain}>
          Play Again
        </Button>
      </Grid>
    </Grid>
  );
};
