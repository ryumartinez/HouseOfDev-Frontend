import React from "react";

import { Navbar } from "../components/Navbar";
import { usePropertyList, useSearchProperty } from "../hooks/property";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { PropertyCard } from "../components/PropertyCard";

export const AlquilerPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "alquiler",
    precio: "ASC",
    habitaciones: "ASC",
  });
  const search = searchParams.get("search");
  const precio = searchParams.get("precio");
  const habitaciones = searchParams.get("habitaciones");

  const query2 = useSearchProperty(search, precio, habitaciones);

  return (
    <div>
      <div className="grid grid-cols-2 px-10 gap-5 mt-5">
        <div className="col-span-2 grid grid-cols-6 border-2 border-solid border-blue-700 ">
          <h1 className="font-bold text-blue-700 text-lg ">
            Propiedades en alquiler
          </h1>
          <div className="col-span-5 col-start-3 sm:col-start-2 border-t-2 border-solid border-blue-700 mt-8 sm:mt-4"></div>
        </div>
        <SearchBar />
        <div className="h-72 col-span-2 bg-[url(https://i.imgur.com/l34Vcnd.png)]"></div>

        {query2?.data?.data?.map((property) => (
          <PropertyCard data={property} />
        ))}
      </div>
    </div>
  );
};
