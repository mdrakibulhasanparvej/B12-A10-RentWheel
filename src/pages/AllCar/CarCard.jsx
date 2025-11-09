import React from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router";

const CarCard = ({ car }) => {
  const { _id, name, daily, car_type, created_by, image_url } = car;

  return (
    <motion.div
      className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden p-4 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >
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
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">Type / Model: {car_type}</p>
        <p className="text-gray-600 text-sm">Provider: {created_by}</p>
        <p className="text-orange-500 font-semibold mt-1">${daily} / day</p>
      </div>

      {/* View Details Button */}
      <NavLink
        to={`/cardetails/${_id}`}
        className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded"
      >
        View Details
      </NavLink>
    </motion.div>
  );
};

export default CarCard;
