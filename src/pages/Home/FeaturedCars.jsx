import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import CarCard from "../../pages/AllCar/CarCard";
import CarCardSkeleton from "../../Components/Skeleton/CarCardSkeleton";

const FeaturedCars = () => {
  const limit = 8;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["featured-cars"],
    queryFn: async () => {
      const res = await fetch(
        `https://rent-wheels-server-eosin.vercel.app/cars?limit=${limit}&sort=newest`
      );
      if (!res.ok) throw new Error("Failed to fetch featured cars");
      return res.json();
    },
  });

  // Skeleton loading
  if (isLoading) {
    return (
      <section className="py-10 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-5 md:px-10">
          <h2 className="text-3xl text-gray-800 dark:text-white comfortaa font-extrabold text-center mb-8">
            Latest <span className="text-orange-500">Cars</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <CarCardSkeleton key={idx} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError || !data?.cars?.length) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No latest cars available.
      </p>
    );
  }

  const cars = data.cars;

  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-5 md:px-10">
        <h2 className="text-3xl text-gray-800 dark:text-white comfortaa font-extrabold text-center mb-8">
          Latest <span className="text-orange-500">Cars</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <motion.div
              key={car._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
