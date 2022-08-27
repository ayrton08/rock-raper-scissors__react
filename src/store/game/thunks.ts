import requestApi from "../../api/requestApi";
import {
  setRoomId,
  setUserId,
  setRtdbRoomId,
  setErrorMessage,
} from "./gameSlice";

type SetStatus = {
  player: string;
  online: boolean;
  name: string;
  rtdbRoomId: string;
};

export const signIn = (player: string) => {
  return async (dispatch) => {
    const { data } = await requestApi.post("/signup", { name: player });
    dispatch(setUserId(data.id));
  };
};

export const askNewRoom = (userId: string) => {
  return async (dispatch: Function) => {
    const { data } = await requestApi.post("/rooms", { userId });

    dispatch(setRoomId(data.id));
  };
};

export const accessToRoom = (roomId: string, userId: string) => {
  return async (dispatch: Function) => {
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
  return async (dispatch: Function) => {
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
  return async (dispatch: Function) => {
    try {
      const { data } = await requestApi.post("/rtdbRoomId", { roomId });

      dispatch(setRtdbRoomId(data.rtdbRoomId));
    } catch (error) {
      const response = error.response.data;
      dispatch(setErrorMessage(`Error: ${response}`));
    }
  };
};

export const setPlay = ({ name, choise, rtdbRoomId, player }) => {
  return async (dispatch: Function) => {
    const { data } = await requestApi.post("/play", {
      name,
      choise,
      rtdbRoomId,
      player,
    });
  };
};

export const setHistory = ({ rtdbRoomId, player, victory }) => {
  return async (dispatch: Function) => {
    const { data } = await requestApi.post("/history", {
      rtdbRoomId,
      player,
      victory,
    });
    console.log(data);
  };
};

export const cleanPlayRoom = ({ name, player, rtdbRoomId }) => {
  return async (dispatch: Function) => {
    const { data } = await requestApi.post("/cleanPlay", {
      name,
      status: true,
      online: false,
      player,
      rtdbRoomId,
    });
  };
};
