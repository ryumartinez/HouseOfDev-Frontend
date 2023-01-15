import React from "react";
import { useDeleteProperty } from "../hooks/property";
import { PropertyCard } from "../components/PropertyCard";
import { usePropertyList } from "../hooks/property";
import { useNavigate } from "react-router-dom";
export const AdminPage = () => {
  const navigate = useNavigate();
  const mutation = useDeleteProperty();
  const query = usePropertyList();

  return (
    <div>
      <div>
        <div className="grid grid-cols-2 px-10 gap-5 mt-5">
          <div className="col-span-2 grid grid-cols-6 border-2 border-solid border-blue-700 ">
            <h1 className="font-bold text-blue-700 text-lg ">Menu de Admin</h1>
            <div className="col-span-5 col-start-3 sm:col-start-2 border-t-2 border-solid border-blue-700 mt-8 sm:mt-4"></div>
          </div>

          {query?.data?.data?.map((property) => (
            <div>
              <PropertyCard data={property} />
              <button
                onClick={() => {
                  mutation.mutate(property.id);
                  navigate(0);
                }}
              >
                eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
