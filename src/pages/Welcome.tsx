import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { player } from "../store/atoms/atoms";

export const Welcome = () => {
  const [playerValue, setPlayerValue] = useRecoilState(player);

  return (
    <>
      <h1>Welcome</h1>
      <hr />
      <Grid container justifyContent="end">
        <p>{playerValue.fullname}</p>
        <Link to="/instructions">
          <Button variant="contained">Next Page</Button>
        </Link>
      </Grid>
    </>
  );
};
