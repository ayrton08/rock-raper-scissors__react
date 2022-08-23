import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    playerOn: false,
    player: null,
    userId: null,
    roomId: null,
  },
  reducers: {
    setPlayerOn: (state, action) => {
      state.playerOn = true;
      state.player = action.payload;
    },
    setUserId: (state, { payload }) => {
      state.userId = payload;
    },
    setRoomId: (state, { payload }) => {
      state.roomId = payload;
    },
  },
});

export const { setPlayerOn, setUserId, setRoomId } = gameSlice.actions;
