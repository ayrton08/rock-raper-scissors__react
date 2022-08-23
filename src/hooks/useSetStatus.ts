import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusPlayer } from "../store/game/thunks";

export const useSetStatus = () => {
  const { roomId, player, rtdbRoomId, dataRoom, myPlay } = useSelector(
    (state) => state.game
  );
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

  return {
    player,
    rtdbRoomId,
    dataRoom,
    myPlay,
    setStatus,
  };
};
