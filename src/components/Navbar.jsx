import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSession } from "../hooks/auth";
export const Navbar = () => {
  const { data } = useSession();
  return (
    <div className="">
      <nav className="navbar flex gap-5">
        <Link to="/register">Registrarse</Link>
        <Link to="/login">Iniciar Sesion</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/alquileres">En alquiler</Link>
        <Link to="/ventas">En venta</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/perfil">Mi perfil</Link>
      </nav>

      <Outlet />
    </div>
  );
};
