import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerOn } from "../store/game/gameSlice";

export const Welcome = () => {
  const dispatch = useDispatch();
  const { playerOn } = useSelector((state) => state.player);
  console.log(playerOn);

  const onClick = () => {
    dispatch(setPlayerOn());
  };

  return (
    <>
      <h1>Welcome</h1>
      <hr />
      <Grid container justifyContent="end">
        {playerOn ? (
          <h1>Hola</h1>
        ) : (
          <Button onClick={onClick} variant="contained">
            Next Page
          </Button>
        )}
      </Grid>
    </>
  );
};
