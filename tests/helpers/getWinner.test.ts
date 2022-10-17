import { getWinner } from "../../src/helpers/getWinner";
enum Result {
  WIN = "win",
  LOST = "lost",
  TIE = "tie",
}

describe("getWinner()", () => {
  const paper = "paper";
  const rock = "rock";
  const scissor = "scissor";

  test("should return Result.WIN", () => {
    const resultPaper = getWinner(paper, rock);
    const resultRock = getWinner(rock, scissor);
    const resultScissor = getWinner(scissor, paper);

    expect(resultPaper).toBe(Result.WIN);
    expect(resultRock).toBe(Result.WIN);
    expect(resultScissor).toBe(Result.WIN);
  });

  test("should return Result.LOST", () => {
    const resultPaper = getWinner(paper, scissor);
    const resultRock = getWinner(rock, paper);
    const resultScissor = getWinner(scissor, rock);

    expect(resultPaper).toBe(Result.LOST);
    expect(resultRock).toBe(Result.LOST);
    expect(resultScissor).toBe(Result.LOST);
  });

  test("should return Result.TIE", () => {
    const resultPaper = getWinner(paper, paper);
    const resultRock = getWinner(rock, rock);
    const resultScissor = getWinner(scissor, scissor);

    expect(resultPaper).toBe(Result.TIE);
    expect(resultRock).toBe(Result.TIE);
    expect(resultScissor).toBe(Result.TIE);
  });
});
