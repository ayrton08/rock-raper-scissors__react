import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    fullnamePlayerOne: null,
    fullnamePlayerTwo: null,
  },
  reducers: {
    setNamePlayerOne: (state, action) => {
      state.fullnamePlayerOne = action.payload;
    },
    setNamePlayerTwo: (state, action) => {
      state.fullnamePlayerTwo = action.payload;
    },
  },
});

export const { setNamePlayerOne, setNamePlayerTwo } = playerSlice.actions;
