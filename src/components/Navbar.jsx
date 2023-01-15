import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSession } from "../hooks/auth";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  const { data: session } = useSession();

  return (
    <div className="">
      <nav className="navbar flex gap-5">
        <Link to="/home">home</Link>

        <Link to="/home/alquileres">En alquiler</Link>
        <Link to="/home/ventas">En venta</Link>
        <Link to="/home/favoritos">Favoritos</Link>
        <a href="http://localhost:5173/home/perfil">Mi perfil</a>
      </nav>

      <Outlet />
    </div>
  );
};
