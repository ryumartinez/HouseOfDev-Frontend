import React from "react";
import { useSession } from "../hooks/auth";
import { useFavorites } from "../hooks/favorite";
import { PropertyCard } from "../components/PropertyCard";
import { useDeleteFavorite } from "../hooks/favorite";
export const FavoritosPage = () => {
  const session = useSession();
  const UserId = session?.data?.data?.id;
  const query = useFavorites(UserId);
  const favorites = query?.data?.data?.Properties;
  const mutation = useDeleteFavorite();
  return (
    <div>
      <div>
        <div className="grid grid-cols-2 px-10 gap-5 mt-5">
          <div className="col-span-2 grid grid-cols-6 border-2 border-solid border-blue-700 ">
            <h1 className="font-bold text-blue-700 text-lg ">Favoritos</h1>
            <div className="col-span-5 col-start-3 sm:col-start-2 border-t-2 border-solid border-blue-700 mt-8 sm:mt-4"></div>
          </div>

          <div className="h-72 col-span-2 bg-[url(https://i.imgur.com/l34Vcnd.png)]"></div>

          {favorites?.map((property) => (
            <div>
              <PropertyCard data={property} />
              <button
                onClick={() =>
                  mutation.mutate({ UserId: UserId, PropertyId: property.id })
                }
              >
                Remover de favoritos
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
