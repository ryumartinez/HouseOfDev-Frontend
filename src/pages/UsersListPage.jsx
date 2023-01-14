import React from "react";
import { NavLink } from "react-router-dom";
import { UserCard } from "../components/UserCard";
import { useUserList } from "../hooks/user";

export const UsersListPage = () => {
  const query = useUserList();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {query?.data?.data?.map((user) => (
        <UserCard data={user} />
      ))}
    </div>
  );
};
