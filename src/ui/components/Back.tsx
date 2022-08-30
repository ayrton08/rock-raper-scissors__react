import { Button } from "@mui/material";
import { useAppDispatch } from "../../hooks/useReduxTypes";
import { cleanState } from "../../store/game/gameSlice";

export const Back = ({ children }: any) => {
  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(cleanState());
  };

  return (
    <Button
      onClick={reset}
      sx={{
        position: "fixed",
        top: "30px",
        left: "30px",
      }}
    >
      {children}
    </Button>
  );
};
