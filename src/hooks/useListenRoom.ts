import { getDatabase, ref, onValue, update } from "firebase/database";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rtdb } from "../firebase/rtdb";
import { setDataRoom } from "../store/game/gameSlice";

export const useListenRoom = () => {
  const { rtdbRoomId } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  useEffect(() => {
    const chatroomsRef = ref(rtdb, "/rooms/" + rtdbRoomId);

    onValue(chatroomsRef, (snapshot) => {
      const value = snapshot.val();
      dispatch(setDataRoom(value));
    });
  }, [rtdbRoomId]);
};
