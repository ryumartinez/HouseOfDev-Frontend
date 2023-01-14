import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSession } from "../hooks/auth";
export const InvitadoLayout = () => {
  return (
    <div className="">
      <nav className="navbar flex gap-5">
        <Link to="/invitado">Home</Link>

        <Link to="/alquileres">En alquiler</Link>
        <Link to="/ventas">En venta</Link>
        <Link to="/register">Registrarme</Link>
        <Link to="/login">Iniciar sesion</Link>
      </nav>

      <Outlet />
    </div>
  );
};
