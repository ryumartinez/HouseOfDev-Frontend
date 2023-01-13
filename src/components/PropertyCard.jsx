import React from "react";
import { NavLink } from "react-router-dom";

export const PropertyCard = ({ data }) => {
  return (
    <div className="border-2 border-solid border-black h-48 grid grid-cols-1 sm:grid-cols-3">
      <NavLink to={`/details/${data.id}`} state={data}>
        <div className="h-full col-span-1 bg-blue-200">
          <img src={data.imageUrl} alt="" />
        </div>
      </NavLink>

      <div className="hidden sm:col-span-2 sm:grid sm:grid-cols-1 sm:grid-rows-4">
        <div className="border-2 border-solid border-black">asdfasd</div>
        <div className="border-2 border-solid border-black">asdfasd</div>
        <div className="border-2 border-solid border-black">asdfasd</div>
        <div className="border-2 border-solid border-black">ver mas</div>
      </div>
    </div>
  );
};
