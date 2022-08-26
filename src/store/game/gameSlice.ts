import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    playerOn: false,
    player: null,
    userId: null,
    roomId: null,
    rtdbRoomId: null,
    dataRoom: {},
    myPlay: null,
    resultGame: null,
    errorMessage: null,
    firstRound: true,
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
    setRtdbRoomId: (state, { payload }) => {
      state.rtdbRoomId = payload;
    },
    setDataRoom: (state, { payload }) => {
      state.dataRoom = payload;
    },
    setMyPlay: (state, { payload }) => {
      state.myPlay = payload;
    },
    setResultGame: (state, { payload }) => {
      state.resultGame = payload;
    },
    cleanPlay: (state) => {
      state.myPlay = null;
      state.resultGame = null;
      state.errorMessage = null;
    },
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    setFirstRound: (state, { payload }) => {
      state.firstRound = payload;
    },
  },
});

export const {
  setPlayerOn,
  setUserId,
  setRoomId,
  setRtdbRoomId,
  setDataRoom,
  setMyPlay,
  setResultGame,
  cleanPlay,
  setErrorMessage,
  setFirstRound
} = gameSlice.actions;
