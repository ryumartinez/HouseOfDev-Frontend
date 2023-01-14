import React from "react";
import { useMutation,useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { request } from "../utils/api/axios";
const newFavorite = (data) =>{
    return request({
        url:"/favorites",
        method:"post",
        data:data
    })
}

export const useNewFavorite = () =>{
    return useMutation({mutationFn:newFavorite})}

const getFavorite = (UserId) =>{
    return request({
        url:`/favorites/${UserId}`,
        method:"get"
    })
}

export const useFavorites = (UserId) =>{
    return useQuery([UserId],()=>getFavorite(UserId))
}

const deleteFavorite = (data) =>{
    return request({
        url:`/favorites/?UserId=${data.UserId}&&PropertyId=${data.PropertyId}`,
        method:"delete"
    })
}
export const useDeleteFavorite = () =>{
    return useMutation({mutationFn:deleteFavorite})
}

