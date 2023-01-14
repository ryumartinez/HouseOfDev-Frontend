import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSession } from "../hooks/auth";
import { Navigate } from "react-router-dom";
function AdminLayout() {
  const { data: session } = useSession();
  const role = session?.data?.role;
  return (
    <>
      <div>
        <div className="flex gap-5 bg-blue-400 navbar">
          <Link to="/home/admin/users">Usuarios</Link>
          <Link to="/home/admin/">Propiedades</Link>
          <Link to="/home/admin/newProp">Nueva Propiedad</Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default AdminLayout;
