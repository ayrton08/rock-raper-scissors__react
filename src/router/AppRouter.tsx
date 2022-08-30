import { Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { Welcome, Game, Result } from "../pages";

export const AppRouter = () => {
  const { roomId } = useStore();

  return (
    <Routes>
      <Route path="/game" element={!roomId ? <Navigate to="/" /> : <Game />} />
      <Route
        path="/result"
        element={!roomId ? <Navigate to="/" /> : <Result />}
      />
      <Route path="/*" element={<Welcome />} />
    </Routes>
  );
};
