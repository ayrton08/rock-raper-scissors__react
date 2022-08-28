import { setResultGame } from "../store/game/gameSlice";
import { setHistory, setStatusPlayer } from "../store/game/thunks";
import { useAppDispatch, useAppSelector } from "./useReduxTypes";

export const useStore = () => {
  const {
    roomId,
    player,
    rtdbRoomId,
    dataRoom,
    myPlay,
    resultGame,
    firstRound,
    errorMessage,
    userId,
    playerOn,
  } = useAppSelector((state) => state.game);
  const { fullnamePlayerOne, fullnamePlayerTwo } = useAppSelector(
    (state) => state.players
  );

  const dispatch = useAppDispatch();

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
  };

  const history1 = dataRoom.history?.player1 || 0;
  const history2 = dataRoom.history?.player2 || 0;
  const playerString = player?.toString() || 0;

  const setHistoryGame = () => {
    if (player === 1 && resultGame === "win") {
      const victory = history1 + 1;
      dispatch(setHistory({ player: playerString, rtdbRoomId, victory }));
    }

    if (player === 1 && resultGame === "lost") {
      const victory = history1;
      dispatch(setHistory({ player: playerString, victory, rtdbRoomId }));
    }

    if (player === 2 && resultGame === "win") {
      const victory = history2 + 1;
      dispatch(setHistory({ player: playerString, victory, rtdbRoomId }));
    }

    if (player === 2 && resultGame === "lost") {
      const victory = history2;
      dispatch(setHistory({ player: playerString, rtdbRoomId, victory }));
    }
  };

  return {
    // Properties:
    player,
    rtdbRoomId,
    dataRoom,
    myPlay,
    resultGame,
    roomId,
    firstRound,


    // Functions:
    setStatus,
    setWhoWin,
    setHistoryGame,
  };
};
