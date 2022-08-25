import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSetStatus } from "../../hooks/useSetStatus";
import { cleanPlay } from "../../store/game/gameSlice";

export const HistoryGame = ({ result }) => {
  const dispatch = useDispatch();
  const { dataRoom, player, resultGame, setWhoWin } = useSetStatus();
  const navigate = useNavigate();

  const playAgain = () => {
    dispatch(cleanPlay());
    navigate("/game", { replace: true });
  };

  return (
    <Grid container direction="column">
      <Grid
        container
        direction="column"
        textAlign="center"
        justifyContent="center"
        sx={{
          minHeight: "400px",
          gap: "30px",
          letterSpacing: "2px",
        }}
        className="player-result"
      >
        <h3>{result}</h3>
        <Grid>
          <span>{dataRoom.jugador1.fullName}</span> ={"  "}
          <strong
            style={{
              fontSize: "40px",
              color: "white",
              fontFamily: "Courier New",
            }}
          >
            {dataRoom.history.player1 || 0}
          </strong>
        </Grid>
        <Grid>
          <span>{dataRoom.jugador2.fullName}</span> ={" "}
          <strong
            style={{
              fontSize: "40px",
              color: "white",
              fontFamily: "Courier New",
            }}
          >
            {dataRoom.history.player2 || 0}
          </strong>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          fontSize: "20px",
          minWidth: "200px",
          alignSelf: "center",
          backgroundColor: "#28B463",
          fontWeight: "bold",
        }}
        onClick={playAgain}
      >
        Play Again
      </Button>
    </Grid>
  );
};
