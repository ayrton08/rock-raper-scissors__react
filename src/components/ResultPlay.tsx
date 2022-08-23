import { getWinner } from "../helpers";
import { useSetStatus } from "../hooks/useSetStatus";

export const ResultPlay = () => {
  const { dataRoom, player } = useSetStatus();

  const result = getWinner(dataRoom.jugador1.choise, dataRoom.jugador2.choise);

  return player === 1 && result === "win" ? (
    <div>Ganaste</div>
  ) : (
    <div>Perdiste</div>
  );
};
