import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Game {
  playerOn: boolean;
  player: number | null;
  userId: number | null;
  roomId: string | null;
  rtdbRoomId: number | null;
  dataRoom: any;
  myPlay: string | null;
  resultGame: string | null;
  errorMessage: string | null;
  firstRound: boolean;
}

const initialState: Game = {
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
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlayerOn: (state, { payload }: PayloadAction<number>) => {
      state.playerOn = true;
      state.player = payload;
    },
    setUserId: (state, { payload }: PayloadAction<number>) => {
      state.userId = payload;
    },
    setRoomId: (state, { payload }: PayloadAction<string>) => {
      state.roomId = payload;
    },
    setRtdbRoomId: (state, { payload }: PayloadAction<number>) => {
      state.rtdbRoomId = payload;
    },
    setDataRoom: (state, { payload }: PayloadAction<any>) => {
      state.dataRoom = payload;
    },
    setMyPlay: (state, { payload }: PayloadAction<string>) => {
      state.myPlay = payload;
    },
    setResultGame: (state, { payload }: PayloadAction<string>) => {
      state.resultGame = payload;
    },
    cleanPlay: (state) => {
      state.myPlay = null;
      state.resultGame = null;
      state.errorMessage = null;
    },
    setErrorMessage: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload;
    },
    setFirstRound: (state, { payload }: PayloadAction<boolean>) => {
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
  setFirstRound,
} = gameSlice.actions;
