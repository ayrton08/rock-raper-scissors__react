// src/mocks/handlers.js
import { rest } from "msw";
import { getEnvVariables } from "../helpers";
const { VITE_API_URL } = getEnvVariables();

export const handlers = [
  rest.post(`${VITE_API_URL}/signup`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: "soy el token del mock",
        new: true,
      })
    );
  }),
  rest.post(`${VITE_API_URL}/rooms`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: "1237",
      })
    );
  }),
  rest.post(`${VITE_API_URL}/status`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: "1237",
      })
    );
  }),
  // rest.get(
  //   `${VITE_API_URL}/room/1034?userId=HiKFbhaNEcB3nop5Aak7`,
  //   (req, res, ctx) => {
  //     return res(
  //       ctx.json({
  //         rtdbRoomId: "MvjU1S8w7z74AjaGA8-yq",
  //       })
  //     );
  //   }
  // ),
];
