export const initialState = {
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

export const statePlayer = {
  playerOn: true,
  player: 1,
  userId: null,
  roomId: null,
  rtdbRoomId: null,
  dataRoom: {},
  myPlay: null,
  resultGame: null,
  errorMessage: null,
  firstRound: true,
};

export const stateWithUserId = {
  playerOn: true,
  player: 1,
  userId: "srjL7zGhDPvGeOtRCKAa",
  roomId: null,
  rtdbRoomId: null,
  dataRoom: {},
  myPlay: null,
  resultGame: null,
  errorMessage: null,
  firstRound: true,
};
export const stateWithRtdbRoomId = {
  playerOn: true,
  player: 1,
  userId: "srjL7zGhDPvGeOtRCKAa",
  roomId: null,
  rtdbRoomId: "GGxWkAUz6A8iKmC2CC4Fn",
  dataRoom: {},
  myPlay: null,
  resultGame: null,
  errorMessage: null,
  firstRound: true,
};

export const stateWithRoomId = {
  playerOn: true,
  player: 1,
  userId: "srjL7zGhDPvGeOtRCKAa",
  roomId: "1988",
  rtdbRoomId: "GGxWkAUz6A8iKmC2CC4Fn",
  dataRoom: {},
  myPlay: null,
  resultGame: null,
  errorMessage: null,
  firstRound: true,
};

export const stateWithDataRoom = {
  playerOn: true,
  player: 1,
  userId: "srjL7zGhDPvGeOtRCKAa",
  roomId: "1988",
  rtdbRoomId: "GGxWkAUz6A8iKmC2CC4Fn",
  dataRoom: {
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
  },
  myPlay: null,
  resultGame: null,
  errorMessage: null,
  firstRound: true,
};

export const stateWithMyPlay = {
  playerOn: true,
  player: 1,
  userId: "srjL7zGhDPvGeOtRCKAa",
  roomId: "1988",
  rtdbRoomId: "GGxWkAUz6A8iKmC2CC4Fn",
  dataRoom: {
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
  },
  myPlay: "paper",
  resultGame: null,
  errorMessage: null,
  firstRound: true,
};

export const stateWithResultGame = {
  playerOn: true,
  player: 1,
  userId: "srjL7zGhDPvGeOtRCKAa",
  roomId: "1988",
  rtdbRoomId: "GGxWkAUz6A8iKmC2CC4Fn",
  dataRoom: {
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
  },
  myPlay: "paper",
  resultGame: "win",
  errorMessage: null,
  firstRound: true,
};
