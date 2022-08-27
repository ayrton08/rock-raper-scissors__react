import { ref, onValue } from "firebase/database";
import { useEffect } from "react";
import { rtdb } from "../firebase/rtdb";
import { setDataRoom } from "../store/game/gameSlice";
import { useAppSelector, useAppDispatch } from "./useReduxTypes";

export const useListenRoom = () => {
  const { rtdbRoomId } = useAppSelector((state) => state.game);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const chatroomsRef = ref(rtdb, "/rooms/" + rtdbRoomId);

    onValue(chatroomsRef, (snapshot) => {
      const value = snapshot.val();
      dispatch(setDataRoom(value));
    });
  }, [rtdbRoomId]);
};
