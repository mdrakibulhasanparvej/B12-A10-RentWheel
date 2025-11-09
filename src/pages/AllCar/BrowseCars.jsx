import React from "react";
import CarCard from "./CarCard";
import { useLoaderData } from "react-router";

const BrowseCars = () => {
  const cars = useLoaderData();
  // console.log(cars);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cars.map((car) => (
        <CarCard key={car._id} car={car} />
      ))}
    </div>
  );
};

export default BrowseCars;
