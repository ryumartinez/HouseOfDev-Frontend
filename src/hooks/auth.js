import { useMutation, useQuery } from "react-query";
import {useNavigate} from "react-router-dom"
import { request } from "../utils/api/axios"; //cliente de axios

//#region logica de UseLogin abajo
const saveOnLocal = (data) => {
  return window.localStorage.setItem("token", JSON.stringify(data));
  
};
const loginUser = (data) => {
  return request({
    url: "/auth",
    method: "post",
    data: data,
  });
};
export const useLogin = () => {
  
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      saveOnLocal(data);
     window.location.replace("http://localhost:5173/home")
    }
  });
};
//#endregion

//#region logica de UseSession abajo
const getSession = () => {
  return request({
    url: "/auth",
    method: "get",
  });
};

export const useSession = () => {
  return useQuery("session", getSession);
};
//#endregion
