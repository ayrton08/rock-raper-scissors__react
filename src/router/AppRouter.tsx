import { Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { Welcome, Game, Result } from "../pages";

export const AppRouter = () => {
  const { roomId } = useStore();

  return (
    <Routes>
      {roomId ? (
        <>
          <Route path="/game" element={<Game />} />
          <Route path="/result" element={<Result />} />
        </>
      ) : (
        <Route path="/*" element={<Navigate to="/" />} />
      )}
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};
