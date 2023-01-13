import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { NewProp } from "./components/NewPropForm";
import RegisterPage from "./pages/Register";

import { AlquilerPage } from "./pages/AlquilerPage";
import DetailsPage from "./pages/Details";
import { VentaPage } from "./pages/VentaPage";
import { Login } from "./pages/Login";
import AdminLayout from "./components/AdminLayout";
import { AdminPage } from "./pages/AdminPage";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { FavoritosPage } from "./pages/FavoritosPage";
import { ProfilePage } from "./pages/ProfilePage";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/*" element={<Navbar />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<Login />} />
          <Route index element={<HomePage />} />
          <Route path="details/:id" element={<DetailsPage />} />
          <Route path="ventas" element={<VentaPage />} />
          <Route path="alquileres" element={<AlquilerPage />} />
          <Route path="favoritos" element={<FavoritosPage />} />
          <Route path="perfil" element={<ProfilePage />} />
          <Route path="admin/*" element={<AdminLayout />}>
            <Route index element={<AdminPage />} />
            <Route path="newProp" element={<NewProp />} />
          </Route>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
