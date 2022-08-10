import { Routes, Route, Navigate } from "react-router-dom";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { Welcome } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};
