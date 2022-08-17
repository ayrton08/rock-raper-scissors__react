// import { useDispatch, useSelector } from "react-redux";
// import { setUserId } from "../store/game/gameSlice";

// const API_BASE_URL: string = "https://apx-m6.herokuapp.com";

// export const signIn = async (player: number) => {
//   const dispatch = useDispatch();

//   const { fullnamePlayerOne } = useSelector((state) => state.players);

//   const res = await fetch(API_BASE_URL + "/signup", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name: fullnamePlayerOne }),
//   });

//   const data = await res.json();

//   dispatch(setUserId(data.id));
// };
