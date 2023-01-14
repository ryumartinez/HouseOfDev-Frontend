import React from "react";
import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <div className="flex gap-5 bg-blue-400">
        <Link to="/home/admin/users">Usuarios</Link>
        <Link to="/home/admin/">Propiedades</Link>
        <Link to="/home/admin/newProp">Nueva Propiedad</Link>
      </div>
      <Outlet />
    </>
  );
}

export default AdminLayout;
