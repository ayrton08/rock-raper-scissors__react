import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    playerOn: false,
  },
  reducers: {
    setPlayerOn: (state) => {
      state.playerOn = true;
    },
  },
});

export const { setPlayerOn } = gameSlice.actions;
