import { Grid } from "@mui/material";
import { useStore } from "../hooks/useStore";
import { Layout } from "../layout/Layout";
import { setFirstRound } from "../store/game/gameSlice";
import { HistoryGame } from "../ui";
import { useAppDispatch } from "../hooks/useReduxTypes";

export const ResultPlay = () => {
  const { resultGame } = useStore();
  const dispatch = useAppDispatch();

  dispatch(setFirstRound(false));

  return (
    <Layout title="History Game">
      <Grid>
        {resultGame === "win" ? (
          <HistoryGame result="You Win!" />
        ) : resultGame === "tie" ? (
          <HistoryGame result="Tie" />
        ) : (
          <HistoryGame result="You Lost" />
        )}
      </Grid>
    </Layout>
  );
};
