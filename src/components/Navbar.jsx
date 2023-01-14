import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSession } from "../hooks/auth";
export const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="">
      <nav className="navbar flex gap-5">
        <Link to="/">home</Link>
        {session?.data?.role == "admin" ? (
          <Link to="/admin">Admin</Link>
        ) : (
          <></>
        )}
        <Link to="/alquileres">En alquiler</Link>
        <Link to="/ventas">En venta</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/perfil">Mi perfil</Link>
      </nav>

      <Outlet />
    </div>
  );
};
