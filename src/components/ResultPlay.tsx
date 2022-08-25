import { Grid } from "@mui/material";
import { useSetStatus } from "../hooks/useSetStatus";
import { Layout } from "../layout/Layaout";
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
