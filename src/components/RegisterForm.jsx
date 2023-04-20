import React from "react";
import { useForm } from "react-hook-form";
import { useRegisterUser } from "../hooks/user";
import Logo from "../icons/Logo";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const mutation = useRegisterUser();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => mutation.mutate(data);

  const formInputs = ["username", "password"];
  return (
    <div className=" ">
      <div className="redBox text-white text-6xl pt-5">
        <Logo />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="formLayout">
        <h4>Registrarme</h4>
        {formInputs.map((input) => (
          <input
            key={input}
            {...register(input)}
            type="text"
            className="input"
            placeholder={input}
          />
        ))}

        <input type="submit" />
        <div className="flex flex-col">
          <Link to="/login" className="text-sm">
            Ya tengo una cuenta
          </Link>
          <Link to="/home" className="text-sm">
            Ir a Home directamente
          </Link>
        </div>
      </form>
    </div>
  );
};
