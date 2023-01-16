import { useMutation,useQuery,useQueryClient } from "react-query";
import { request } from "../utils/api/axios";
import { useNavigate } from "react-router-dom";

//#region logica de useRegisterUser abajo
const registerUser = (data) =>{return request({
    url:"/users",
    method:"post",
    data:data
})}
export const useRegisterUser = () =>{
    const navigate = useNavigate()
    return useMutation({
        mutationFn:registerUser,
        onSuccess: ()=>{
            navigate("/login")
        }
    })
}
//#endregion

//#region logica de useUserList abajo
const getAllUsers = () =>{
    return request({
        url:"/users",
        method:"get",
    })
}

export const useUserList = () =>{
    return useQuery("users",getAllUsers)
}
//#endregion

//#region logica de deleteUser abajo
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
//#endregion