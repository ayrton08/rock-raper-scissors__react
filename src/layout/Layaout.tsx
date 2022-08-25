import { Grid, Typography } from "@mui/material";
import { useSetStatus } from "../hooks/useSetStatus";
import Divider from "@mui/material/Divider";

export const Layout = ({ children, title }) => {
  const { dataRoom, resultGame } = useSetStatus();

  return (
    <Grid
      container
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
    </Grid>
  );
};
