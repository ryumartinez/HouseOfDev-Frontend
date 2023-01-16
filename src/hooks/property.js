import { QueryClient, useMutation, useQuery,useQueryClient } from "react-query";
import { request } from "../utils/api/axios";
import { useNavigate } from "react-router-dom";
const getAllProperties = () => {
  return request({
    url: "/properties",
    method: "get",
  });
};

const newProp = (data) => {
  return request({
    url: "/properties",
    method: "post",
    data: data,
  });
};

const searchProperties = (search,precio,habitaciones) => {

  return request({
    url: `/properties/search/?search=${search}&&precio=${precio}&&habitaciones=${habitaciones}`,
    method: "get",
  });
};

const deleteProperty =(data) =>{
  return request({
    url: `/properties/${data}`,
    method:"delete"
  }
  )
}



export const useDeleteProperty = () =>{
  const client = useQueryClient()
  const navigate = useNavigate()
  return useMutation({mutationFn:deleteProperty})
}

export const useSearchProperty = (search,precio,habitaciones) =>{
  
    return useQuery([search,precio,habitaciones],()=>searchProperties(search,precio,habitaciones),{keepPreviousData:true})
}

export const usePropertyList = () => {
  return useQuery("properties", getAllProperties,{keepPreviousData:true});
};

export const useNewProperty = () => {
  return useMutation({ mutationFn: newProp });
};
