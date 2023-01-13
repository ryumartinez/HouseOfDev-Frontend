import React from "react";
import { useForm } from "react-hook-form";
import { useRegisterUser } from "../hooks/user";
export const RegisterForm = () => {
  const mutation = useRegisterUser();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => mutation.mutate(data);

  const formInputs = [
    "email",
    "password",
    "username",
    "role",
    "imageUrl",
    "telefono",
  ];
  return (
    <div className=" border-2 border-solid border-black">
      <div className="redBox text-white text-6xl">House Of Dev</div>
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
