import React from "react";
import { Link } from "react-router-dom";
import Circulo from "../icons/Circulo";
import Flecha from "../icons/Flecha";
import Logo from "../icons/Logo";
import { Navigate } from "react-router-dom";
import { useSession } from "../hooks/auth";
export const OnBoarding = () => {
  return (
    <div className="grid grid-cols-1 bg-red-500 grid-rows-6 h-screen">
      <div className="row-start-3 md:mx-auto">
        <Logo />
        <Circulo>
          <p className="text-white text-lg px-2">Tu nueva vivienda esta aqui</p>
        </Circulo>
      </div>
      <div className="row-start-5 mx-auto">
        <Link
          to="/register"
          className="hidden sm:inline text-md p-2 bg-white rounded-lg "
        >
          Registrarme
        </Link>
      </div>
      <div className="row-start-6 row-span-1 bg-white md:hidden">
        <Link
          to="/register"
          className="flex justify-center items-center gap-16 pt-10"
        >
          <Flecha />
          <Flecha />
          <Flecha />
        </Link>
      </div>
    </div>
  );
};
