type Play = "rock" | "paper" | "scissor";

export const getWinner = (playOne: Play, playTwo: Play) => {
  if (!playOne || !playTwo) {
    return null;
  }
  if (playOne === "paper" && playTwo === "rock") {
    return "win";
  }
  if (playOne === "rock" && playTwo === "scissor") {
    return "win";
  }
  if (playOne === "scissor" && playTwo === "paper") {
    return "win";
  }
  if (playOne === playTwo) {
    return "tie";
  } else {
    return "lost";
  }
};
