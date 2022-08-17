import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const GameApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};
