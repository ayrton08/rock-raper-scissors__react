import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WaitRoom } from "../components/WaitRoom";
import { useListenRoom } from "../hooks/useListenRoom";
import { useSetStatus } from "../hooks/useSetStatus";

export const Game = () => {
  const { setStatus } = useSetStatus();
  const { roomId, player, rtdbRoomId, dataRoom } = useSelector(
    (state) => state.game
  );

  useEffect(() => {
    setStatus(false);
  }, []);

  useListenRoom();

  useEffect(() => {
    console.log(dataRoom);
  }, [dataRoom]);

  return (
    <>
      {dataRoom.jugador1 && dataRoom.jugador2 ? (
        <WaitRoom />
      ) : (
        <h2>Share the code: {roomId} with your opponent</h2>
      )}
    </>
  );
};
