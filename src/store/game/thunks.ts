import requestApi from "../../api/config";
import {
  onAccesToRoom,
  onAskNewRoom,
  onCleanPlayRoom,
  onGetRtdbRoomId,
  onSetHistory,
  onSetPlay,
  onSetStatusPlayer,
  onSignIn,
} from "../../api/requests";
import { CleanPlay, SetHistory, SetPlay, SetStatus } from "./game.models";
import {
  setRoomId,
  setUserId,
  setRtdbRoomId,
  setErrorMessage,
} from "./gameSlice";

export const signIn = (player: string) => {
  return async (dispatch: any) => {
    const data = await onSignIn(player);
    dispatch(setUserId(data.id));
  };
};

export const askNewRoom = (userId: string) => {
  return async (dispatch: any) => {
    const data = await onAskNewRoom(userId);

    dispatch(setRoomId(data.id));
  };
};

export const accessToRoom = (roomId: string, userId: string) => {
  return async (dispatch: any) => {
    const data = await onAccesToRoom(roomId, userId);

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
      await onSetStatusPlayer({
        player,
        online,
        name,
        rtdbRoomId,
      });
    }
  };
};

export const getRtdbRoomId = (roomId: string) => {
  return async (dispatch: any) => {
    try {
      const data = await onGetRtdbRoomId(roomId);

      dispatch(setRtdbRoomId(data.rtdbRoomId));
    } catch (error: any) {
      const response = error.response.data;
      dispatch(setErrorMessage(`Error: ${response}`));
    }
  };
};

export const setPlay = ({ name, choise, rtdbRoomId, player }: SetPlay) => {
  return async (dispatch: Function) => {
    await onSetPlay({ name, choise, rtdbRoomId, player });
  };
};

export const setHistory = ({ rtdbRoomId, player, victory }: SetHistory) => {
  return async (dispatch: Function) => {
    await onSetHistory({ rtdbRoomId, player, victory });
  };
};

export const cleanPlayRoom = ({ name, player, rtdbRoomId }: CleanPlay) => {
  return async (dispatch: any) => {
    await onCleanPlayRoom({ name, player, rtdbRoomId });
  };
};
