import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CarCard from "./CarCard";
import Loading from "../../Components/Loading";
import CarNotFound from "../error/CarNotFound";
import useTitle from "../../hooks/useTitle";
import Pagination from "../../Components/Shared/pagination/Pagination";

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
  useTitle("All-Cars");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("newest");

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 12;
  const skip = currentPage * limit;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["cars", skip, limit, searchTerm, selectedCategory, sort],
    queryFn: async () => {
      const res = await fetch(
        `https://rent-wheels-server-eosin.vercel.app/cars?limit=${limit}&skip=${skip}&search=${searchTerm}&category=${selectedCategory}&sort=${sort}`
      );
      if (!res.ok) throw new Error("Fetch failed");
      return res.json();
    },
    keepPreviousData: true,
  });

  if (isLoading) return <Loading />;
  if (isError) return <CarNotFound />;

  const cars = data?.cars || [];
  const totalPage = Math.ceil((data?.totalcars || 0) / limit);

  return cars.length > 0 ? (
    <div className="p-6 bg-gray-100 dark:bg-gray-900">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
        {/* Category */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(0);
              }}
              className={`px-4 py-2 rounded cursor-pointer ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="name or location..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="px-4 py-2 border rounded dark:bg-white"
          />

          <button
            onClick={() => {
              setSearchTerm(searchInput);
              setCurrentPage(0);
            }}
            className="px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border rounded dark:bg-white cursor-pointer"
        >
          <option value="newest">Newest</option>
          <option value="price_low">Price: Low → High</option>
          <option value="price_high">Price: High → Low</option>
        </select>
      </div>

      {/* Cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  ) : (
    <CarNotFound />
  );
};

export default BrowseCars;
