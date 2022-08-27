import requestApi from "../../api/requestApi";
import {
  setRoomId,
  setUserId,
  setRtdbRoomId,
  setErrorMessage,
} from "./gameSlice";

interface SetStatus {
  player: number;
  online: boolean;
  name: string | null;
  rtdbRoomId: string | null;
}

interface SetPlay {
  name: string;
  choise: string;
  rtdbRoomId: string | null;
  player: number | null;
}
interface SetHistory {
  rtdbRoomId: string | null;
  player: string | number;
  victory: string;
}
interface CleanPlay {
  name: string;
  player: string;
  rtdbRoomId: string | null;
}

export const signIn = (player: string) => {
  return async (dispatch: any) => {
    const { data } = await requestApi.post("/signup", { name: player });
    dispatch(setUserId(data.id));
  };
};

export const askNewRoom = (userId: string) => {
  return async (dispatch: any) => {
    const { data } = await requestApi.post("/rooms", { userId });

    dispatch(setRoomId(data.id));
  };
};

export const accessToRoom = (roomId: string, userId: string | null) => {
  return async (dispatch: any) => {
    const { data } = await requestApi.get(`/room/${roomId}/?userId=${userId}`);

    dispatch(setRtdbRoomId(data.rtdbRoomId));
  };
};

export const setStatusPlayer = ({
  player,
  online,
  name,
  rtdbRoomId,
}: SetStatus) => {
  return async (dispatch: any) => {
    if (player) {
      await requestApi.post(`/status`, {
        player,
        online,
        name,
        status: true,
        rtdbRoomId,
      });
    }
  };
};

export const getRtdbRoomId = (roomId: string) => {
  return async (dispatch: any) => {
    try {
      const { data } = await requestApi.post("/rtdbRoomId", { roomId });

      dispatch(setRtdbRoomId(data.rtdbRoomId));
    } catch (error: any) {
      const response = error.response.data;
      dispatch(setErrorMessage(`Error: ${response}`));
    }
  };
};

export const setPlay = ({ name, choise, rtdbRoomId, player }: SetPlay) => {
  return async (dispatch: Function) => {
    const { data } = await requestApi.post("/play", {
      name,
      choise,
      rtdbRoomId,
      player,
    });
  };
};

export const setHistory = ({ rtdbRoomId, player, victory }: SetHistory) => {
  return async (dispatch: Function) => {
    const { data } = await requestApi.post("/history", {
      rtdbRoomId,
      player,
      victory,
    });
    console.log(data);
  };
};

export const cleanPlayRoom = ({ name, player, rtdbRoomId }: CleanPlay) => {
  return async (dispatch: any) => {
    const { data } = await requestApi.post("/cleanPlay", {
      name,
      status: true,
      online: false,
      player,
      rtdbRoomId,
    });
  };
};
