import { atom } from "recoil";

export const player = atom({
  key: "player", // unique ID (with respect to other atoms/selectors)
  default: {
    fullname: "",
  }, // default value (aka initial value)
});
