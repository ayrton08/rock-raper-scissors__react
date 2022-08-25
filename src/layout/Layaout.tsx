import { Grid, Typography } from "@mui/material";
import { useSetStatus } from "../hooks/useSetStatus";

export const Layout = ({ children, title }) => {
  const { dataRoom } = useSetStatus();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh", padding: 4 }}
      className="welcome"
    >
      <Grid
        item
        className="box-shadow"
        justifyContent="space-between"
        sx={{
          backgroundColor: "white",
          opacity: "0.8",
          padding: 3,
          borderRadius: 2,
          height: "600px",
          width: { md: 550 },
        }}
      >
        <Grid container direction="row" justifyContent="center" className="animate__animated animate__fadeIn" >
          <Typography variant="h5" sx={{ mb: 1, alignContent: "center" }}>
            {title}
          </Typography>
          {/* <Grid container direction="column">
            <Grid container direction="row">
              {dataRoom?.jugador1?.fullName || ""}{" "}
              <div className="animate__animated animate__flash">🟢</div>
            </Grid>
            <Grid container direction="row">
              {dataRoom?.jugador2?.fullName || ""}{" "}
              <div className="animate__animated animate__flash">🟢</div>
            </Grid>
          </Grid> */}
        </Grid>

        {children}
      </Grid>
    </Grid>
  );
};
