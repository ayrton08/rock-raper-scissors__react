import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Player {
  fullnamePlayerOne: string | null;
  fullnamePlayerTwo: string | null;
}

const initialState: Player = {
  fullnamePlayerOne: null,
  fullnamePlayerTwo: null,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setNamePlayerOne: (state, { payload }: PayloadAction<string>) => {
      state.fullnamePlayerOne = payload;
    },
    setNamePlayerTwo: (state, { payload }: PayloadAction<string>) => {
      state.fullnamePlayerTwo = payload;
    },
  },
});

export const { setNamePlayerOne, setNamePlayerTwo } = playerSlice.actions;
