import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

const CarCard = ({ car }) => {
  const {
    _id,
    name,
    rent_per_day,
    category,
    provider_name,
    image_url,
    status,
  } = car;

  // Badge color based on status
  const statusColor = status === "available" ? "bg-green-500" : "bg-red-500";

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg overflow-hidden p-4 flex flex-col relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Status Badge */}
      <span
        className={`absolute top-2 right-2 text-xs font-semibold text-white px-2 py-1 rounded-full ${statusColor}`}
      >
        {status === "available" ? "Available" : "Unavailable"}
      </span>

      {/* Car Image */}
      {image_url && (
        <img
          src={image_url}
          alt={name}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}

      {/* Car Info */}
      <div className="flex flex-col gap-1">
        <p className=" text-sm">
          <span className="font-semibold">Car Name:</span> {name}
        </p>
        <p className="dark:text-gray-400  text-sm">
          <span className="font-semibold">Rent Price (per day):</span> $
          {rent_per_day}
        </p>
        <p className="dark:text-gray-400  text-sm">
          <span className="font-semibold">Car Type:</span> {category}
        </p>
        <p className="dark:text-gray-400  text-sm">
          <span className="font-semibold">Provider Name:</span> {provider_name}
        </p>
      </div>

      {/* View Details Button */}
      <NavLink
        to={`/cardetails/${_id}`}
        className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded text-center"
      >
        View Details
      </NavLink>
    </motion.div>
  );
};

export default CarCard;
