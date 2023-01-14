import { Route, Routes } from "react-router-dom";
import React from "react";
import { Layout } from "./components/Layout";
import { LoginPage } from "./pages/LoginPage";
import RegisterPage from "./pages/Register";
import { OnBoarding } from "./pages/OnBoarding";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/**rutas publicas */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="linkpage" />
        <Route path="unauthorized" />
        <Route path="/" element={<OnBoarding />} />
        {/**rutas protegidas */}
        <Route path="admin"></Route>
        <Route path="user"></Route>
        {/**ruta 404 not found */}
      </Route>
    </Routes>
  );
};
