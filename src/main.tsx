import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GameApp } from "./GameApp";
import "./index.css";

import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>

  <Provider store={store}>
    <BrowserRouter>
      <GameApp />
    </BrowserRouter>
  </Provider>
  /* </React.StrictMode> */
);
