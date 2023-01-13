import React from "react";
import { useSession } from "../hooks/auth";
import { useFavorites } from "../hooks/favorite";
import { PropertyCard } from "../components/PropertyCard";

export const FavoritosPage = () => {
  const session = useSession();
  const UserId = session?.data?.data?.id;
  const query = useFavorites(UserId);
  const favorites = query?.data?.data?.Properties;
  return (
    <div>
      <div>
        <div className="grid grid-cols-2 px-10 gap-5">
          <div className="col-span-2">
            <h1 className="text-3xl">Favoritos</h1>
          </div>

          <div className="col-span-2">botones</div>
          <div className="h-72 col-span-2 bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f9e2f107360739.5fa521b236457.jpg)]"></div>

          {favorites?.map((property) => (
            <div>
              <PropertyCard data={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
