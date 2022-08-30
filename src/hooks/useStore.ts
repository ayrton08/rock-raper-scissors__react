import { setResultGame } from "../store/game/gameSlice";
import { setHistory, setStatusPlayer } from "../store/game/thunks";
import { useAppDispatch, useAppSelector } from "./useReduxTypes";

export enum Result {
  WIN = "win",
  LOST = "lost",
  TIE = "tie",
}

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

  const setStatus = (online: boolean): void => {
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

  const response: any = {
    win: {
      1: () => dispatch(setResultGame("win")),
      2: () => dispatch(setResultGame("lost")),
    },
    lost: {
      1: () => dispatch(setResultGame("lost")),
      2: () => dispatch(setResultGame("win")),
    },
    tie: {
      1: () => dispatch(setResultGame("tie")),
      2: () => dispatch(setResultGame("tie")),
    },
  };

  const setWhoWin = (result: Result): void => {
    response[result][player]();
  };

  const history1 = dataRoom.history?.player1 || 0;
  const history2 = dataRoom.history?.player2 || 0;
  const playerString = player?.toString() || 0;

  const setHistoryGame = (): void => {
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
    fullnamePlayerOne,
    fullnamePlayerTwo,
    player,
    rtdbRoomId,
    dataRoom,
    myPlay,
    resultGame,
    roomId,
    firstRound,
    errorMessage,
    userId,
    playerOn,

    // Functions:
    setStatus,
    setWhoWin,
    setHistoryGame,
  };
};
