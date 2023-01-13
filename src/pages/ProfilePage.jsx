import React from "react";
import { useSession } from "../hooks/auth";

export const ProfilePage = () => {
  const session = useSession();
  return (
    <div>
      <div className="grid grid-cols-6">
        <div className="col-span-6">mi perfil</div>

        <div className="col-span-2 col-start-5 row-span-2">
          <img></img>
        </div>
        <div className="col-span-4">{session?.data?.data?.username}</div>
        <div className="col-span-6">{session?.data?.data?.email}</div>
        <div className="col-span-6">{session?.data?.data?.telefono}</div>
      </div>
    </div>
  );
};
