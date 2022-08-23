import { Button, Grid, TextField } from "@mui/material";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { setNamePlayerOne } from "../store/player/playerSlice";
import { signIn } from "../store/game/thunks";

const initialState: { fullname: string } = {
  fullname: "",
};

export const NewGame = () => {
  const { fullname, onInputChange } = useForm(initialState);

  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(setNamePlayerOne(fullname));
    dispatch(signIn(fullname));
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "500px" }}
    >
      <h3>Your Name</h3>
      <TextField
        type="text"
        placeholder="Your Name"
        fullWidth
        name="fullname"
        value={fullname}
        onChange={onInputChange}
      />
      <Button onClick={startGame}>
        <ArrowForwardTwoToneIcon />
        Start
      </Button>
    </Grid>
  );
};
