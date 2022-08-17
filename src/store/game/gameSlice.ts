import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    playerOn: false,
    player: null,
    userId: null,
  },
  reducers: {
    setPlayerOn: (state, action) => {
      state.playerOn = true;
      state.player = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setPlayerOn, setUserId } = gameSlice.actions;
