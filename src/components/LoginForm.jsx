import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/auth";
import Logo from "../icons/Logo";
import { useNavigate } from "react-router-dom";
export const LoginForm = () => {
  const mutation = useLogin();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  const formInputs = ["username", "password"];

  return (
    <div className=" ">
      <div className="redBox text-white text-6xl pt-5">
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
