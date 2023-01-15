import React from "react";
import { useForm } from "react-hook-form";
import { useNewProperty } from "../hooks/property";

export const NewProp = () => {
  const mutation = useNewProperty();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => mutation.mutate(data);

  const formInputs = [
    "name",
    "description",
    "descriptionFull",
    "imageUrl",
    "area",
    "habitaciones",
    "direccion",
    "precio",
    "sanitarios",
  ];
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 p-10 gap-10"
      >
        {formInputs.map((input) => (
          <input
            key={input}
            {...register(input)}
            type="text"
            className="input h-10"
            placeholder={input}
          />
        ))}
        <select {...register("categoria", { required: true })}>
          <option value="ventas">ventas</option>
          <option value="alquileres">alquileres</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};
