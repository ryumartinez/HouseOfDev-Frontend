import { useMutation, useQuery } from "react-query";
import {useNavigate} from "react-router-dom"
import { request } from "../utils/api/axios";

const loginUser = (data) => {
  return request({
    url: "/auth",
    method: "post",
    data: data,
  });
};

const saveOnLocal = (data) => {
  return window.localStorage.setItem("token", JSON.stringify(data));
  
};

const getSession = () => {
  return request({
    url: "/auth",
    method: "get",
  });
};

export const useSession = (data) => {
  return useQuery("session", getSession,{enabled:data});
};

export const useLogin = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      saveOnLocal(data);
      navigate("/home")
    }
  });
};
