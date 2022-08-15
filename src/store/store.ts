import { configureStore } from "@reduxjs/toolkit";
import { playerSlice } from "./player/playerSlice";
import { gameSlice } from "./game/gameSlice";

export const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
    game: gameSlice.reducer,
  },
});