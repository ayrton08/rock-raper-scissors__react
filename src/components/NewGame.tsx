import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Alert,
} from "@mui/material";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { setNamePlayerOne } from "../store/player/playerSlice";
import { signIn } from "../store/game/thunks";
import { useEffect, useState } from "react";
import { useSetStatus } from "../hooks/useSetStatus";

import { useAppSelector, useAppDispatch } from "../hooks/useReduxTypes";


const initialState: { fullname: string } = {
  fullname: "",
};

export const NewGame = () => {
  const dispatch = useAppDispatch();
  const { roomId } = useSetStatus();
  const { fullname, onInputChange } = useForm(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  const startGame = () => {
    if (fullname.length <= 0) {
      return setError(true);
    }
    setIsLoading(true);
    dispatch(setNamePlayerOne(fullname));
    dispatch(signIn(fullname));
  };

  useEffect(() => {
    if (roomId) {
      setIsLoading(false);
    }
  }, [roomId]);

  return isLoading ? (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ gap: "50px" }}
      className="animate__animated animate__fadeIn"
    >
      <h4 style={{ fontSize: "30px" }}>Getting the code room</h4>
      <CircularProgress size="60px" />
    </Grid>
  ) : (
    <Grid
      container
      justifyContent="space-evenly"
      alignSelf="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "500px", height: "400px" }}
      className="animate__animated animate__fadeInUp glass-efect"
    >
      <h3 className="your-name">Your Name</h3>
      <TextField
        type="text"
        placeholder={"Your Name"}
        fullWidth
        name="fullname"
        value={fullname}
        onChange={onInputChange}
        error={error}
        autoComplete="off"
      />
      <Grid container display={!!error ? "" : "none"} sx={{ mt: 1, mb: 1 }}>
        <Grid item xs={12}>
          <Alert severity="error">Insert a name</Alert>
        </Grid>
      </Grid>
      <Button
        onClick={startGame}
        sx={{ fontSize: "20px", border: "solid 1px" }}
      >
        <ArrowForwardTwoToneIcon />
        Start
      </Button>
    </Grid>
  );
};
