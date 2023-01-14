import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDeleteProperty } from "../hooks/property";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useSession } from "../hooks/auth";
import { useNewFavorite } from "../hooks/favorite";

function DetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const property = location.state;
  const { data } = useSession();
  const PropertyId = property.id;
  const UserId = data.data.id;
  const mutation = useNewFavorite();
  return (
    <div>
      <div className="grid grid-cols-1  sm:grid-cols-3 px-10">
        <div className="sm:col-span-3">
          <h1>{property.id}</h1>
        </div>
        <div className="sm:col-span-3 ">
          <img src={property.imageUrl} alt="fasdf" className="h-72" />
        </div>
        <div className=" h-32">Precio</div>
        <div className="h-32">Superficie</div>
        <div className="h-32">Ubicacion</div>
        <div className="sm:col-span-2 sm:row-span-2 col-start-1 h-32">
          <h1>Descripcion</h1>
          <p>{property.description}</p>
        </div>

        <button
          onClick={() =>
            mutation.mutate({ UserId: UserId, PropertyId: PropertyId })
          }
        >
          Agregar a favoritos
        </button>
      </div>
    </div>
  );
}

export default DetailsPage;
