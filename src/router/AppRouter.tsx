import { Routes, Route, Navigate } from "react-router-dom";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { Welcome } from "../pages/Welcome";

export const AppRouter = () => {
  const status = true;

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};
