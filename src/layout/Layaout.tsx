import { CircularProgress, Grid, Typography } from "@mui/material";
import { useSetStatus } from "../hooks/useSetStatus";
import Divider from "@mui/material/Divider";
import { useBeforeunload } from "react-beforeunload";
import PersonIcon from "@mui/icons-material/Person";

export const Layout = ({ children, title }: any) => {
  const { dataRoom, resultGame, roomId, firstRound } = useSetStatus();

  useBeforeunload(() => console.log("te vas"));

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh", padding: 4, gap: "10px" }}
      className="welcome"
    >
      <Grid
        item
        className="box-shadow"
        justifyContent="space-between"
        sx={{
          backgroundColor:
            resultGame === "win"
              ? "#66BB6A"
              : resultGame === "lost"
              ? "#EF5350"
              : resultGame === "tie"
              ? "#FFCC80"
              : "white",
          opacity: "0.8",
          padding: 3,
          borderRadius: 2,
          height: "600px",
          width: { md: 550, xs: 350 },
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          className="animate__animated animate__fadeIn"
        >
          <Typography variant="h5" sx={{ mb: 1, alignContent: "center" }}>
            {title}
          </Typography>
        </Grid>
        <Divider variant="middle" />

        {children}
      </Grid>
      <Grid
        container
        direction="column"
        sx={{
          display:
            location.pathname === "/game" || location.pathname === "/result"
              ? "inherit"
              : "none",
          width: { md: 550, xs: 350 },
          opacity: "0.8",
          padding: 2,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <strong>Room : {roomId}</strong>

        <Grid container direction="row">
          <strong>Players: </strong>{" "}
          <i style={{ color: "green", alignContent: "center" }}>
            <PersonIcon />
            {dataRoom.jugador1?.fullName || dataRoom.jugador1?.name || (
              <CircularProgress size={"20px"} />
            )}
          </i>{" "}
          <i style={{ color: "green" }}>
            <PersonIcon />
            {firstRound
              ? dataRoom.jugador2?.name ||
                dataRoom.jugador2?.fullName || <CircularProgress size={"20px"} />
              : (!firstRound && dataRoom.jugador2?.fullName) ||
                dataRoom.jugador2?.nam}
          </i>
        </Grid>
      </Grid>
    </Grid>
  );
};
