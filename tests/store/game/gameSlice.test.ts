import {
  cleanState,
  gameSlice,
  setDataRoom,
  setMyPlay,
  setPlayerOn,
  setResultGame,
  setRoomId,
  setRtdbRoomId,
  setUserId,
} from "../../../src/store/game/gameSlice";
import {
  initialState,
  statePlayer,
  stateWithDataRoom,
  stateWithMyPlay,
  stateWithResultGame,
  stateWithRoomId,
  stateWithRtdbRoomId,
  stateWithUserId,
} from "../../fixtures/gameFixture";

describe("Tests in the gameSlice", () => {
  test("should return the initial state y called 'game'", () => {
    const state = gameSlice.reducer(initialState, {
      type: undefined,
    });

    expect(gameSlice.name).toBe("game");
    expect(state).toEqual(initialState);
  });

  test("should set state and number player ", () => {
    const player = 1;
    const state = gameSlice.reducer(initialState, setPlayerOn(player));

    expect(state).toEqual(statePlayer);
  });

  test("should set userId", () => {
    const userId = "srjL7zGhDPvGeOtRCKAa";
    const state = gameSlice.reducer(statePlayer, setUserId(userId));

    expect(state).toEqual(stateWithUserId);
  });

  test("should set rtdbRoomId", () => {
    const rtdbRoomId = "GGxWkAUz6A8iKmC2CC4Fn";
    const state = gameSlice.reducer(stateWithUserId, setRtdbRoomId(rtdbRoomId));

    expect(state).toEqual(stateWithRtdbRoomId);
  });

  test("should set roomId", () => {
    const roomId = "1988";
    const state = gameSlice.reducer(stateWithRtdbRoomId, setRoomId(roomId));

    expect(state).toEqual(stateWithRoomId);
  });

  test("should set dataRoom", () => {
    const dataRoom = {
      history: {
        player1: 0,
        player2: 0,
      },
      jugador1: {
        fullName: "Ayrton",
        online: false,
        status: true,
      },
      jugador2: {
        fullName: "Juan",
        online: false,
        status: true,
      },
    };
    const state = gameSlice.reducer(stateWithRoomId, setDataRoom(dataRoom));

    expect(state).toEqual(stateWithDataRoom);
  });

  test("should set myPlay", () => {
    const myPlay = "paper";
    const state = gameSlice.reducer(stateWithDataRoom, setMyPlay(myPlay));

    expect(state).toEqual(stateWithMyPlay);
  });

  test("should set resultGame", () => {
    const resultGame = "win";
    const state = gameSlice.reducer(stateWithMyPlay, setResultGame(resultGame));

    expect(state).toEqual(stateWithResultGame);
  });

  test("should set cleanState", () => {
    const state = gameSlice.reducer(stateWithMyPlay, cleanState());

    expect(state).toEqual(initialState);
  });
});
