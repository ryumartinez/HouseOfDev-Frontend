import React from "react";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <div className="bg-red-600 sm:bg-[url(https://cdn.pixabay.com/photo/2015/07/31/06/50/forest-868715_960_720.jpg)] sm:bg-right-top md:bg-no-repeat ">
      <div className="h-screen grid grid-cols-1 grid-rows-6 sm:grid-cols-12 ">
        <div
          className="row-start-3 sm:row-start-2 sm:col-start-3 sm:col-span-2 row-span-4 w-full sm:w-80
       
        "
        >
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
