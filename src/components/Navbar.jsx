import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSession } from "../hooks/auth";
export const Navbar = () => {
  const { data } = useSession();
  return (
    <div className="">
      <nav className="navbar flex gap-5">
        <Link to="/home/admin">Admin</Link>
        <Link to="/home/alquileres">En alquiler</Link>
        <Link to="/home/ventas">En venta</Link>
        <Link to="/home/favoritos">Favoritos</Link>
        <Link to="/home/perfil">Mi perfil</Link>
      </nav>

      <Outlet />
    </div>
  );
};
