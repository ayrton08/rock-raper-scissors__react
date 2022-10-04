import {
  CleanPlay,
  SetHistory,
  SetPlay,
  SetStatus,
} from "../store/game/game.models";
import requestApi from "./config";

export const onSignIn = async (player: string) => {
  try {
    const { data } = await requestApi.post("/signup", { name: player });
    return data;
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};
export const onAskNewRoom = async (userId: string) => {
  try {
    const { data } = await requestApi.post("/rooms", { userId });
    return data;
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};
export const onAccesToRoom = async (roomId: string, userId: string | null) => {
  try {
    const { data } = await requestApi.get(`/room/${roomId}/?userId=${userId}`);
    return data;
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};

export const onSetStatusPlayer = async ({
  player,
  online,
  name,
  rtdbRoomId,
}: SetStatus) => {
  try {
    await requestApi.post(`/status`, {
      player,
      online,
      name,
      status: true,
      rtdbRoomId,
    });
    return;
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};

export const onGetRtdbRoomId = async (roomId: string) => {
  try {
    const { data } = await requestApi.post("/rtdbRoomId", { roomId });
    return data;
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};

export const onSetPlay = async ({
  name,
  choise,
  rtdbRoomId,
  player,
}: SetPlay) => {
  try {
    const { data } = await requestApi.post("/play", {
      name,
      choise,
      rtdbRoomId,
      player,
    });
    return data;
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};

export const onSetHistory = async ({
  rtdbRoomId,
  player,
  victory,
}: SetHistory) => {
  try {
    const { data } = await requestApi.post("/history", {
      rtdbRoomId,
      player,
      victory,
    });
    return data;
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};

export const onCleanPlayRoom = async ({
  name,
  player,
  rtdbRoomId,
}: CleanPlay) => {
  try {
    const { data } = await requestApi.post("/cleanPlay", {
      name,
      status: true,
      online: false,
      player,
      rtdbRoomId,
    });
    return data;
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};
