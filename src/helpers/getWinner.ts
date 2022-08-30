import { Result } from "../hooks/useStore";
type Play = "rock" | "paper" | "scissor";

export const getWinner = (playOne: Play, playTwo: Play): null | Result => {
  if (!playOne || !playTwo) {
    return null;
  }
  if (playOne === "paper" && playTwo === "rock") {
    return Result.WIN;
  }
  if (playOne === "rock" && playTwo === "scissor") {
    return Result.WIN;
  }
  if (playOne === "scissor" && playTwo === "paper") {
    return Result.WIN;
  }
  if (playOne === playTwo) {
    return Result.TIE;
  } else {
    return Result.LOST;
  }
};
