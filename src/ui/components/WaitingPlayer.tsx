import { CircularProgress, Grid } from "@mui/material";
import { useStore } from "../../hooks/useStore";
import { Layout } from "../../layout/Layaout";

export const WaitingPlayer = () => {
  const { dataRoom, player } = useStore();

  return (
    <>
      <Layout title="Time to wait">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          sx={{
            height: "500px",
            gap: "40px",
          }}
        >
          {player === 1 ? (
            <h3 style={{ fontSize: "25px" }}>
              Waiting {dataRoom.jugador2?.fullName} play...
            </h3>
          ) : (
            <h3 style={{ fontSize: "25px" }}>
              Waiting {dataRoom.jugador1?.fullName} play...
            </h3>
          )}
          <CircularProgress color="success" />
        </Grid>
      </Layout>
    </>
  );
};
