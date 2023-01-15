import React from "react";
import { NavLink } from "react-router-dom";

export const UserCard = ({ data }) => {
  return (
    <div className=" h-48 grid grid-cols-1 sm:grid-cols-4 justify-center items-center pl-32">
      <NavLink
        to={`/admin/userdetails/${data.id}`}
        state={data}
        className="border-2  border-solid border-blue-700"
      >
        <div className="h-32 w-full col-span-1 bg-blue-200">
          <img src={data.imageUrl} alt="" className="h-full" />
        </div>
        <h3>{data.username}</h3>
      </NavLink>
    </div>
  );
};
