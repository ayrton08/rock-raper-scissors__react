export interface Game {
  playerOn: boolean;
  player: any;
  userId: string;
  roomId: string | null;
  rtdbRoomId: string | null;
  dataRoom: any;
  myPlay: string | null;
  resultGame: string | null;
  errorMessage: string | null;
  firstRound: boolean;
}

export interface SetStatus {
  player: number;
  online: boolean;
  name: string | null;
  rtdbRoomId: string | null;
}

export interface SetPlay {
  name: string;
  choise: string;
  rtdbRoomId: string | null;
  player: number | null;
}
export interface SetHistory {
  rtdbRoomId: string | null;
  player: string | number;
  victory: string;
}
export interface CleanPlay {
  name: string;
  player: string;
  rtdbRoomId: string | null;
}
