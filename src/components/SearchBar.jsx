import React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams(" ");
  const { register, handleSubmit } = useForm();
  const search = searchParams.get("search");
  const onSubmit = (data) => {
    return setSearchParams({
      search: data.search,
      precio: data.filtroPrecio,
      habitaciones: data.filtroHabitaciones,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("search")}
          placeholder="searchbar"
          className="input"
        />
        <select {...register("filtroPrecio", { required: true })}>
          <option value="ASC">mayor precio</option>
          <option value="DESC">menor precio</option>
        </select>
        <select {...register("filtroHabitaciones", { required: true })}>
          <option value="ASC">mas habitaciones</option>
          <option value="DESC">menos habitaciones</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};
