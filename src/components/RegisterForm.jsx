import React from "react";
import { useForm } from "react-hook-form";
import { useRegisterUser } from "../hooks/user";
import Logo from "../icons/Logo";
export const RegisterForm = () => {
  const mutation = useRegisterUser();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => mutation.mutate(data);

  const formInputs = ["email", "password", "username", "telefono"];
  return (
    <div className=" ">
      <div className="redBox text-white text-6xl">
        <Logo />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="formLayout">
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
      </form>
    </div>
  );
};
