import React from "react";
import { useLocation } from "react-router-dom";

export const UserDetails = () => {
  const location = useLocation();
  const user = location.state;
  return (
    <div>
      <div className="md:mx-32 mt-16 border-2 border-solid shadow-md">
        <div className="grid md:grid-cols-6 gap-10 gap-x-4">
          <div className="col-span-6 grid grid-cols-6 border-2 border-solid border-blue-700 ">
            <h1 className="font-bold text-blue-700 text-lg ">
              Perfil de usuario
            </h1>
            <div className="col-span-5 col-start-3 sm:col-start-2 border-t-2 border-solid border-blue-700 mt-8 sm:mt-4"></div>
          </div>

          <div className="col-span-1 col-start-6 row-span-2 row-start-2 ">
            <div className="bg-red-200 h-40 w-40 ">
              <img src={user.imageUrl} />
            </div>
          </div>

          <div className="col-span-5 border-b-2 border-solid row-start-3 border-blue-700 p-2">
            <h2 className="">Nombre de usuario</h2>
            {user.username}
          </div>

          <div className="col-span-6 border-b-2 border-solid border-blue-700 p-2">
            <h2>Correo electronico</h2>
            {user.email}
          </div>

          <div className="col-span-6 border-b-2 border-solid border-blue-700 p-2">
            <h2>Telefono</h2>
            {user.telefono}
          </div>
        </div>
      </div>
    </div>
  );
};
