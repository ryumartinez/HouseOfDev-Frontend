import { useMutation,useQuery,useQueryClient } from "react-query";
import { request } from "../utils/api/axios";
import { useNavigate } from "react-router-dom";

const registerUser = (data) =>{return request({
    url:"/users",
    method:"post",
    data:data
})}

const getAllUsers = () =>{
    return request({
        url:"/users",
        method:"get",
    })
}

export const useUserList = () =>{
    return useQuery("users",getAllUsers)
}

export const useRegisterUser = () =>{
    const navigate = useNavigate()
    return useMutation({
        mutationFn:registerUser,
        onSuccess: ()=>{
            navigate("/login")
        }
    })
}
const deleteUser =(data) =>{
    return request({
      url: "/users",
      method:"delete",
      data:data
    }
    )
  }
  export const useDeleteUser = () =>{
    const client = useQueryClient()
    return useMutation({
      mutationFn:deleteUser,
      onSuccess:()=>{
        client.invalidateQueries("users")
      }
    })
  }