import React from "react";
import { useSession } from "../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const ProfilePage = () => {
  const navigate = useNavigate();
  const session = useSession();
  const user = session.data?.data;

  if (!user) {
    return (
      <div>
        <h1 className="text-3xl text-blue-700 p-5">Tenes que iniciar sesion</h1>
        <div className="flex flex-col p-5 gap-5">
          <Link to="/register" className="text-xl text-blue-500">
            Registrarme
          </Link>
          <Link to="/login" className="text-xl text-blue-500">
            Iniciar Sesion
          </Link>
        </div>
      </div>
    );
  }
  if (user)
    return (
      <div className="md:mx-32 mt-16 border-2 border-solid shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 gap-x-4">
          <div className="col-span-6 grid grid-cols-6 border-2 border-solid border-blue-700 ">
            <h1 className="font-bold text-blue-700 text-lg ">Mi perfil</h1>
            <div className="col-span-5 col-start-3 sm:col-start-2 border-t-2 border-solid border-blue-700 mt-8 sm:mt-4"></div>
          </div>

          <div className="col-span-1 col-start-6 row-span-2 row-start-2 ">
            <div className="bg-red-200 h-40 w-40 ">
              <img src={user?.imageUrl} />
            </div>
          </div>

          <div className="col-span-5 border-b-2 border-solid row-start-3 border-blue-700 p-2">
            <h2 className="">Nombre de usuario</h2>
            {user?.username}
          </div>

          <div className="col-span-6 border-b-2 border-solid border-blue-700 p-2">
            <h2>Correo electronico</h2>
            {user?.email}
          </div>

          <div className="col-span-6 border-b-2 border-solid border-blue-700 p-2">
            <h2>Telefono</h2>
            {user?.telefono}
          </div>

          <div className="col-start-5">
            <div className="flex gap-5">
              <Link to="/home/favoritos">Favoritos</Link>
              <button
                onClick={() => {
                  window.localStorage.clear();
                  window.location.reload();
                }}
              >
                cerrar sesion
              </button>
              {user.role == "admin" ? (
                <Link to="/admin" className="">
                  admin
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};
