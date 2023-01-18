import React from "react";
import { useMutation,useQuery } from "react-query"; 
import { request } from "../utils/api/axios"; //cliente de axios
import { useQueryClient } from "react-query";
//#region logica de useNewFavorite abajo
const newFavorite = (data) =>{
    return request({
        url:"/favorites",
        method:"post",
        data:data
    })
}

export const useNewFavorite = () =>{
    return useMutation({mutationFn:newFavorite})}
//#endregion

//#region logica de useFavorites abajo
const getFavorite = (UserId) =>{
    return request({
        url:`/favorites/${UserId}`,
        method:"get"
    })
}

export const useFavorites = (UserId) =>{
    return useQuery("favorites",()=>getFavorite(UserId))
}
//#endregion

//#region logica de useDeleteFavorites abajo
const deleteFavorite = (data) =>{
    return request({
        url:`/favorites/?UserId=${data.UserId}&&PropertyId=${data.PropertyId}`,
        method:"delete"
    })
}
export const useDeleteFavorite = () =>{
    const client = useQueryClient()
    return useMutation({mutationFn:deleteFavorite,onSuccess:client.invalidateQueries("favorites")})
}
//#endregion
