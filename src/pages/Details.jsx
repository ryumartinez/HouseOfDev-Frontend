import React from "react";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useSession } from "../hooks/auth";
import { useNewFavorite } from "../hooks/favorite";

function DetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const property = location.state;
  const { data } = useSession();
  const PropertyId = property.id;
  const UserId = data?.data?.id;
  const mutation = useNewFavorite();
  return (
    <div>
      <div className="grid grid-cols-1  sm:grid-cols-3 grid-rows-4 px-10 gap-8 mt-10">
        <div className="sm:col-span-3 ">
          <img
            src={property.imageUrl}
            alt="fasdf"
            className="h-72 w-full object-contain"
          />
        </div>
        <div className=" h-32 bg-red-200 text-4xl">
          <h3>Precio</h3>
          <p>{property.precio}</p>
        </div>
        <div className="h-32 bg-green-200 text-4xl ">
          <h3>Superficie</h3>
          <p>{property.area}</p>
        </div>
        <div className="h-32 bg-blue-200 text-4xl ">
          {" "}
          <h3>Ubicacion</h3>
          <p>{property.direccion}</p>
        </div>
        <div className="sm:col-span-2 sm:row-span-2 col-start-1 h-32 border-2 border-solid border-blue-200">
          <h1 className="text-4xl">Descripcion</h1>
          <p>{property.description}</p>
        </div>

        <button
          onClick={() =>
            mutation.mutate({ UserId: UserId, PropertyId: PropertyId })
          }
          className="bg-yellow-200"
        >
          Agregar a favoritos
        </button>
      </div>
    </div>
  );
}

export default DetailsPage;
