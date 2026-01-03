import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { motion } from "framer-motion";
import CarCard from "../../pages/AllCar/CarCard";

const FeaturedCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all cars from MongoDB
    fetch("https://rent-wheels-server-eosin.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => {
        const sortedCars = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setCars(sortedCars.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
        setLoading(false);
      });
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  if (cars.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No latest cars available.
      </p>
    );
  }

  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-5 md:px-10">
        <h2 className="text-3xl text-gray-800 dark:text-white  comfortaa font-extrabold  text-center mb-8">
          Latest <span className="text-orange-500 comfortaa">Cars</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
