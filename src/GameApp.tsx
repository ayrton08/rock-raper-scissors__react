import { useState } from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const GameApp = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};
