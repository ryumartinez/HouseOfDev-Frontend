import React from "react";
import { usePropertyList, useSearchProperty } from "../hooks/property";
import { PropertyCard } from "../components/PropertyCard";
import { useSession } from "../hooks/auth";
export const HomePage = () => {
  const query = usePropertyList();
  const { data } = useSession();
  return (
    <div>
      <div className="grid grid-cols-2 px-10 gap-5 mt-5">
        <div className="col-span-2 grid grid-cols-6 border-2 border-solid border-blue-700 ">
          <h1 className="font-bold text-blue-700 text-lg ">
            Nuestras Propiedades
          </h1>
          <div className="col-span-5 col-start-3 sm:col-start-2 border-t-2 border-solid border-blue-700 mt-8 sm:mt-4"></div>
        </div>

        <div className="h-72 col-span-2 overflow-hidden relative bg-gradient-to-r from-transparent to-blue-700">
          <img
            src="https://i.imgur.com/l34Vcnd.png"
            className="mix-blend-overlay object-cover absolute h-full w-full"
          />
        </div>
        {query.isLoading ? <p>cargando...</p> : <></>}
        {query?.data?.data?.map((property) => (
          <PropertyCard data={property} />
        ))}
      </div>
    </div>
  );
};
