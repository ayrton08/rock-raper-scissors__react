import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxTypes";
import { useStore } from "../../hooks/useStore";
import { cleanPlay } from "../../store/game/gameSlice";
import { cleanPlayRoom } from "../../store/game/thunks";

export const HistoryGame = ({ result }: any) => {
  const dispatch = useAppDispatch();
  const { dataRoom, player, rtdbRoomId } = useStore();
  const navigate = useNavigate();

  const playerAsString = player.toString();

  const playAgain = () => {
    if (player === 1) {
      dispatch(
        cleanPlayRoom({
          name: dataRoom.jugador1.fullName,
          player: playerAsString,
          rtdbRoomId,
        })
      );
    }
    if (player === 2) {
      dispatch(
        cleanPlayRoom({
          name: dataRoom.jugador2.fullName,
          player: playerAsString,
          rtdbRoomId,
        })
      );
    }
    dispatch(cleanPlay());
    navigate("/game", { replace: true });
  };

  return (
    <Grid container direction="column">
      <Grid
        container
        direction="column"
        textAlign="center"
        justifyContent="space-evenly"
        sx={{
          gap: "30px",
          letterSpacing: "2px",
        }}
        className="player-result"
      >
        <h3 style={{ fontSize: "45px" }}>{result}</h3>
        <Grid>
          <span>{dataRoom.jugador1.name}</span> ={"  "}
          <strong
            style={{
              fontSize: "40px",
              color: "white",
              fontFamily: "Courier New",
            }}
          >
            {dataRoom.history?.player1 || 0}
          </strong>
        </Grid>
        <Grid>
          <span>{dataRoom.jugador2.name}</span> ={" "}
          <strong
            style={{
              fontSize: "40px",
              color: "white",
              fontFamily: "Courier New",
            }}
          >
            {dataRoom.history?.player2 || 0}
          </strong>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          fontSize: {xs: "15px", md: "20px"},
          minWidth: "200px",
          alignSelf: "center",
          backgroundColor: "#28B463",
          fontWeight: "bold",
          fontFamily: "Anton",
          letterSpacing: "5px",
          marginTop: "20px",
        }}
        onClick={playAgain}
        className="animate__animated animate__tada"
      >
        Play Again
      </Button>
    </Grid>
  );
};
