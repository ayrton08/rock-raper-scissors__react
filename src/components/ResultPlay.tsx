import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSetStatus } from "../hooks/useSetStatus";
import { Layout } from "../layout/Layaout";
import { cleanPlayRoom } from "../store/game/thunks";
import { HistoryGame } from "../ui/components/HistoryGame";

export const ResultPlay = () => {
  const { resultGame } = useSetStatus();

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
