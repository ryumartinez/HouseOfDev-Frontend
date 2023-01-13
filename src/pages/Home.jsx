import React from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { usePropertyList, useSearchProperty } from "../hooks/property";

import { SearchBar } from "../components/SearchBar";
import { PropertyCard } from "../components/PropertyCard";
export const HomePage = () => {
  const query = usePropertyList();

  return (
    <div>
      <div className="grid grid-cols-2 px-10 gap-5">
        <div className="col-span-2">
          <h1>Todas las Propiedades</h1>
        </div>
        <div className="col-span-2">botones</div>
        <div className="h-72 col-span-2 bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f9e2f107360739.5fa521b236457.jpg)]"></div>
        {query?.data?.data?.map((property) => (
          <PropertyCard data={property} />
        ))}
      </div>
    </div>
  );
};
