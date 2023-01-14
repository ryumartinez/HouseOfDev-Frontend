import React from "react";
import { RegisterForm } from "../components/RegisterForm";

function RegisterPage() {
  return (
    <div className="bg-red-600 sm:bg-[url(https://i.imgur.com/GWlrTLR.png)] sm:bg-right-top md:bg-no-repeat h-screen">
      <div className="h-screen grid grid-cols-1 grid-rows-6 sm:grid-cols-12 ">
        <div
          className="row-start-3 sm:row-start-2 sm:col-start-4 sm:col-span-2 row-span-4 w-full sm:w-80
       
        "
        >
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
