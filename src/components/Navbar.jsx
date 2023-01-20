import React from "react";
import { Link, Outlet } from "react-router-dom";
import CompactLogo from "../icons/CompactLogo";
export const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar flex justify-around">
        <div className="">
          <CompactLogo />
        </div>
        <div className="flex gap-5 text-white">
          <Link to="/home">Home</Link>
          <Link to="/home/alquileres">En alquiler</Link>
          <Link to="/home/ventas">En venta</Link>
          <Link to="/home/perfil" onClick={this.forceUpdate}>
            Mi perfil
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};
