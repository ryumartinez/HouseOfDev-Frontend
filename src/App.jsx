import React from "react";
import { Routes, Route } from "react-router-dom";
import { NewProp } from "./components/NewPropForm";
import RegisterPage from "./pages/Register";
import { AlquilerPage } from "./pages/AlquilerPage";
import DetailsPage from "./pages/Details";
import { VentaPage } from "./pages/VentaPage";
import AdminLayout from "./components/AdminLayout";
import { AdminPage } from "./pages/AdminPage";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { FavoritosPage } from "./pages/FavoritosPage";
import { ProfilePage } from "./pages/ProfilePage";
import { OnBoarding } from "./pages/OnBoarding";
import { LoginPage } from "./pages/LoginPage";
import { UsersListPage } from "./pages/UsersListPage";
import { UserDetails } from "./pages/UserDetails";

function App() {
  return (
    <main>
      <Routes>
        <Route index element={<OnBoarding />} />
        <Route path="/home/*" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="details/:id" element={<DetailsPage />} />
          <Route path="ventas" element={<VentaPage />} />
          <Route path="alquileres" element={<AlquilerPage />} />
          <Route path="favoritos" element={<FavoritosPage />} />
          <Route path="perfil" element={<ProfilePage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="admin/*" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
          <Route path="newProp" element={<NewProp />} />
          <Route path="users" element={<UsersListPage />} />
          <Route path="userdetails/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
