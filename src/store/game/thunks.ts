import { useSelector } from "react-redux";
import { setUserId } from "./gameSlice";

const API_BASE_URL: string = "https://apx-m6.herokuapp.com";

export const signIn = (player: number) => {
  return async (dispatch) => {
    const { fullnamePlayerOne } = useSelector((state) => state.players);
    console.log(fullnamePlayerOne);

    const res = await fetch(API_BASE_URL + "/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: fullnamePlayerOne }),
    });

    const data = await res.json();
    console.log(res);

    dispatch(setUserId(data.id));
  };
};
