import { Routes, Route, Navigate } from "react-router-dom";
import { Welcome, Game, Result } from "../pages";

export const AppRouter = () => {

  // todo: agregar filtro de ruta si noy hay roomId redireccionar
  
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/game" element={<Game />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};
