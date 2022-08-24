import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResultGame } from "../store/game/gameSlice";
import { setStatusPlayer } from "../store/game/thunks";

export const useSetStatus = () => {
  const { roomId, player, rtdbRoomId, dataRoom, myPlay, resultGame } =
    useSelector((state) => state.game);
  const { fullnamePlayerOne, fullnamePlayerTwo } = useSelector(
    (state) => state.players
  );

  const dispatch = useDispatch();

  const setStatus = (online: boolean) => {
    if (player === 1) {
      dispatch(
        setStatusPlayer({
          online,
          player,
          name: fullnamePlayerOne,
          rtdbRoomId,
        })
      );
    }

    if (player === 2) {
      dispatch(
        setStatusPlayer({
          online,
          player,
          name: fullnamePlayerTwo,
          rtdbRoomId,
        })
      );
    }
  };

  const setWhoWin = (result: string) => {
    if (player === 1 && result === "win") {
      dispatch(setResultGame("win"));
    }
    if (player === 1 && result === "lost") {
      dispatch(setResultGame("lost"));
    }
    if (player === 2 && result === "win") {
      dispatch(setResultGame("lost"));
    }
    if (player === 2 && result === "lost") {
      dispatch(setResultGame("win"));
    }
    if (result === "tie") {
      dispatch(setResultGame("tie"));
    }

    // todo: llegar a la base de datos
  };

  return {
    player,
    rtdbRoomId,
    dataRoom,
    myPlay,
    resultGame,
    setStatus,
    setWhoWin,
  };
};
