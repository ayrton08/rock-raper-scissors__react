import { Routes, Route, Navigate } from "react-router-dom";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { Welcome } from "../pages";
import { Game } from "../pages/Game";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};
