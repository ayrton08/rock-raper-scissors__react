import { ResultPlay } from "../components/ResultPlay";
import { useStore } from "../hooks/useStore";
import { useEffect, useState } from "react";
import { getWinner } from "../helpers";
import { WaitingPlayer, Playing } from "../ui";

export const Result = () => {
  const { dataRoom, resultGame, setWhoWin, setHistoryGame, setStatus } =
    useStore();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isWaiting, setIsWaiting] = useState<boolean>(true);

  useEffect(() => {
    const result = getWinner(
      dataRoom.jugador1?.choise,
      dataRoom.jugador2?.choise
    );
    if (!isWaiting && result) {
      setWhoWin(result);
    }
  }, [isPlaying]);

  useEffect(() => {
    const result = getWinner(
      dataRoom.jugador1?.choise,
      dataRoom.jugador2?.choise
    );
    setHistoryGame();
  }, [resultGame]);

  useEffect(() => {
    if (dataRoom.jugador1?.choise && dataRoom.jugador2?.choise) {
      setStatus(false);
      setIsWaiting(false);
      setIsPlaying(true);

      setTimeout(() => {
        setIsPlaying(false);
      }, 4000);
    }
  }, [dataRoom]);

  return isPlaying ? (
    <Playing />
  ) : isWaiting ? (
    <WaitingPlayer />
  ) : (
    <ResultPlay />
  );
};
