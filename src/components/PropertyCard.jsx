import React from "react";
import { NavLink } from "react-router-dom";

export const PropertyCard = ({ data }) => {
  return (
    <div className=" h-48 grid grid-cols-1 sm:grid-cols-3 ">
      <NavLink
        to={`/home/details/${data.id}`}
        state={data}
        className="border-2 sm:border-r-0 border-solid border-blue-700"
      >
        <div className="h-full col-span-1 bg-blue-200">
          <img src={data.imageUrl} alt="" className="h-full" />
        </div>
      </NavLink>

      <div className="hidden sm:col-span-2 sm:grid sm:grid-cols-3 sm:grid-rows-4 border-2 border-solid border-blue-700 ">
        <div className="col-span-1 text-center">{data.precio}</div>
        <div className="col-span-2 border-l-2 border-solid border-blue-700 text-center">
          {data.direccion}
        </div>
        <div className="col-span-3 grid grid-cols-7 border-y-2 border-solid border-blue-700 text-center">
          <div className="col-span-2 text-center">{data.area}</div>
          <div className="col-span-3 border-x-2 border-solid border-blue-700 text-center ">
            {data.habitaciones}
          </div>
          <div className="col-span-2 text-center">{data.sanitarios}</div>
        </div>
        <div className="col-span-3 text-center">{data.description}</div>
        <div className="col-span-3 border-t-2 border-solid border-blue-700 text-center">
          {data.name}
        </div>
      </div>
    </div>
  );
};
