import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

function AdminLayout() {
  return (
    <>
      <div className="flex gap-5 bg-blue-400">
        <Link to="/admin/users">Usuarios</Link>
        <Link to="/admin/props">Propiedades</Link>
        <Link to="/admin/newProp">Nueva Propiedad</Link>
        <Link to="/admin/newUser">Nuevo Usuario</Link>
      </div>
      <Outlet />
    </>
  );
}

export default AdminLayout;
