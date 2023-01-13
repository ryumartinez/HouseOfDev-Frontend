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
    url: "/properties",
    method:"delete",
    data:data
  }
  )
}



export const useDeleteProperty = () =>{
  const client = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn:deleteProperty,
    onSuccess:()=>{
      client.invalidateQueries("properties")
    }
  })
}

export const useSearchProperty = (search,precio,habitaciones) =>{
  
    return useQuery([search,precio,habitaciones],()=>searchProperties(search,precio,habitaciones))
}

export const usePropertyList = () => {
  return useQuery("properties", getAllProperties);
};

export const useNewProperty = () => {
  return useMutation({ mutationFn: newProp });
};
