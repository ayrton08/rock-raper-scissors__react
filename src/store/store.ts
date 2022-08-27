import { configureStore } from "@reduxjs/toolkit";
import { playerSlice } from "./player/playerSlice";
import { gameSlice } from "./game/gameSlice";

export const store = configureStore({
  reducer: {
    players: playerSlice.reducer,
    game: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
