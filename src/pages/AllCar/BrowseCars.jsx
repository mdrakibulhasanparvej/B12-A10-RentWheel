import React, { useState } from "react";
import CarCard from "./CarCard";
import { useLoaderData } from "react-router";
import Loading from "../../Components/Loading";
import CarNotFound from "../error/CarNotFound";

const categories = [
  "All",
  "sports",
  "suv",
  "exotic",
  "convertible",
  "Luxury",
  "Economy",
];

const BrowseCars = () => {
  const cars = useLoaderData(); // fetch cars from loader
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  if (!cars) {
    return <Loading />;
  }

  // Filter cars based on category and search term
  const filteredCars = cars
    .filter((car) =>
      selectedCategory === "All" ? true : car.category === selectedCategory
    )
    .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return cars.length > 0 ? (
    <div className="p-6">
      {/* Category Filter Buttons + Search */}
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const count =
              category === "All"
                ? cars.length
                : cars.filter((car) => car.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded font-medium ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <input
          type="text"
          placeholder="Search by car name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ml-auto px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Car Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car._id} car={car} />)
        ) : (
          <CarNotFound />
        )}
      </div>
    </div>
  ) : (
    <CarNotFound />
  );
};

export default BrowseCars;
