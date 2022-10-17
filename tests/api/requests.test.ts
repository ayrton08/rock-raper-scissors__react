import { onAccesToRoom, onAskNewRoom, onSignIn } from "../../src/api/requests";

import { rest } from "msw";
import { server } from "../../src/mocks/server";
import { getEnvVariables } from "../../src/helpers";

const { VITE_API_URL } = getEnvVariables();

describe("onSignIn()", () => {
  test("should return a created token", async () => {
    const name = "John";

    const response = await onSignIn(name);

    expect(response).toEqual({
      id: "soy el token del mock",
      new: true,
    });
  }, 10000);
});

describe("onAskNewRoom()", () => {
  test("should return a created roomId", async () => {
    const userId = "HiKFbhaNEcB3nop5Aak7";

    const response = await onAskNewRoom(userId);

    expect(response).toEqual({
      id: "1237",
    });
  }, 10000);

  test("should return an error response if  a invalid userId is provided", async () => {
    server.resetHandlers(
      rest.post(`${VITE_API_URL}/rooms`, (req, res, ctx) => {
        return res(ctx.json({ error: true }));
      })
    );

    const userId = "invalid-user-id";

    const response = await onAskNewRoom(userId);

    expect(response).toEqual({
      error: true,
    });
  }, 10000);
});
// describe("onAccesToRoom()", () => {
//   test("should return a created rtdbRoomId", async () => {

//     const response = await onAccesToRoom(userId);

//     expect(response).toEqual({
//       id: "1237",
//     });
//   }, 10000);

// });
