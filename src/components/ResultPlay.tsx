import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSetStatus } from "../hooks/useSetStatus";
import { Layout } from "../layout/Layaout";
import { cleanPlayRoom } from "../store/game/thunks";
import { HistoryGame } from "../ui/components/HistoryGame";

export const ResultPlay = () => {
  const { resultGame, player, rtdbRoomId, dataRoom } = useSetStatus();
  const dispatch = useDispatch();

  if (player === 1) {
    dispatch(
      cleanPlayRoom({ name: dataRoom.jugador1.fullName, player, rtdbRoomId })
    );
  }
  if (player === 2) {
    dispatch(
      cleanPlayRoom({ name: dataRoom.jugador2.fullName, player, rtdbRoomId })
    );
  }

  return (
    <Layout title="History Game">
      <Grid>
        {resultGame === "win" ? (
          <HistoryGame result="Ganaste" />
        ) : resultGame === "tie" ? (
          <HistoryGame result="Empate" />
        ) : (
          <HistoryGame result="Perdiste" />
        )}
      </Grid>
    </Layout>
  );
};
