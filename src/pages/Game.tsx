import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WaitRoom } from "../components/WaitRoom";
import { useListenRoom } from "../hooks/useListenRoom";
import { useSetStatus } from "../hooks/useSetStatus";
import { Layout } from "../layout/Layaout";

export const Game = () => {
  const { setStatus } = useSetStatus();
  const { roomId, player, rtdbRoomId, dataRoom } = useSelector(
    (state) => state.game
  );

  useEffect(() => {
    setStatus(false);
  }, [player]);

  useListenRoom();

  return (
    <>
      <Layout title="Rock, paper or scissors">
        {dataRoom.jugador1?.status & dataRoom.jugador2?.status ? (
          <WaitRoom />
        ) : (
          <h2>Share the code: {roomId} with your opponent</h2>
        )}
      </Layout>
    </>
  );
};
