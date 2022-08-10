import { atom } from "recoil";

export const playRoom = atom({
  key: "playRoom", // unique ID (with respect to other atoms/selectors)
  default: {
    roomId: 0,
    rtdbRoomId: 0,
  }, // default value (aka initial value)
});
