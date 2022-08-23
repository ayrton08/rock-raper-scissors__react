import { useSelector } from "react-redux";

export const Game = () => {
  const { roomId } = useSelector((state) => state.game);

  return (
    <>
      <h2>Share the code: {roomId} with your opponent</h2>
    </>
  );
};
