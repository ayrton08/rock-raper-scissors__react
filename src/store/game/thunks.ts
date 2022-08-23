import requestApi from "../../api/requestApi";
import { setRoomId, setUserId } from "./gameSlice";

export const signIn = (player: string) => {
  return async (dispatch: Function) => {
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
