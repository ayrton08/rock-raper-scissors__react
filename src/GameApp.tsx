import { useState } from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";
import { RecoilRoot } from "recoil";

export const GameApp = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecoilRoot>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </RecoilRoot>
    </>
  );
};
