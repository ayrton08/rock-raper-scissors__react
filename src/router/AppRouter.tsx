import { Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { Welcome, Game, Result } from "../pages";

export const AppRouter = () => {
  const { roomId } = useStore();

  console.log("router", roomId);
  return (
    <Routes>
      {roomId ? (
        <>
          <Route path="/game" element={<Game />} />
          <Route path="/result" element={<Result />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Welcome />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
