import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSession } from "../hooks/auth";
import { useNavigate } from "react-router-dom";
import CompactLogo from "../icons/CompactLogo";
export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <nav className="navbar flex justify-around">
        <div className="">
          <CompactLogo />
        </div>
        <div className="flex gap-5">
          <Link to="/home">home</Link>
          <Link to="/home/alquileres">En alquiler</Link>
          <Link to="/home/ventas">En venta</Link>
          <a href="http://localhost:5173/home/perfil">Mi perfil</a>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};
