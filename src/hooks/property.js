import {useMutation, useQuery,useQueryClient } from "react-query";
import { request } from "../utils/api/axios"; //cliente de axios
import { useNavigate } from "react-router-dom";

//#region logica de usePropertyList abajo
const getAllProperties = () => {
  return request({
    url: "/properties",
    method: "get",
  });
};
export const usePropertyList = () => {
  return useQuery("properties", getAllProperties,{keepPreviousData:true});
};
//#endregion

//#region logica de useNewProperty abajo
const newProp = (data) => {
  return request({
    url: "/properties",
    method: "post",
    data: data,
  });
};
export const useNewProperty = () => {
  return useMutation({ mutationFn: newProp });
};
//#endregion

//#region logica de useSearchProperty abajo
const searchProperties = (search,precio,habitaciones) => {

  return request({
    url: `/properties/search/?search=${search}&&precio=${precio}&&habitaciones=${habitaciones}`,
    method: "get",
  });
};
export const useSearchProperty = (search,precio,habitaciones) =>{
  
    return useQuery([search,precio,habitaciones],()=>searchProperties(search,precio,habitaciones),{keepPreviousData:true})
}
//#endregion

//#region logica de useDeleteProperty abajo
const deleteProperty =(data) =>{
  return request({
    url: `/properties/${data}`,
    method:"delete"
  }
  )
}
export const useDeleteProperty = () =>{
  const client = useQueryClient()

  return useMutation({mutationFn:deleteProperty},{onSuccess:client.invalidateQueries("properties")})
}
//#endregion



