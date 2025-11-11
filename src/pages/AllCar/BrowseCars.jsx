import React from "react";
import CarCard from "./CarCard";
import { useLoaderData } from "react-router";
import Loading from "../../Components/Loading";
import CarNotFound from "../error/CarNotFound";

const BrowseCars = () => {
  const cars = useLoaderData();
  // console.log(cars);
  if (!cars) {
    return <Loading />;
  }
  return cars.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cars.map((car) => (
        <CarCard key={car._id} car={car} />
      ))}
    </div>
  ) : (
    <CarNotFound />
  );
};

export default BrowseCars;
