import React from "react";
import { LoginForm } from "../components/LoginForm";
import { useSession } from "../hooks/auth";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const navigate = useNavigate();
  const { data } = useSession();
  if (data) {
    navigate("/home");
  }
  return (
    <div>
      <div className="bg-red-600 sm:bg-[url(https://i.imgur.com/GWlrTLR.png)] sm:bg-right-top md:bg-no-repeat h-screen">
        <div className="h-screen grid grid-cols-1 grid-rows-6 sm:grid-cols-12 ">
          <div
            className="row-start-3 sm:row-start-2 sm:col-start-4 sm:col-span-2 row-span-4 w-full sm:w-80
       
        "
          >
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
