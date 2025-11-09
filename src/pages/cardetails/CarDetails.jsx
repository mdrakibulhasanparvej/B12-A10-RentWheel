import React from "react";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router";

const CarDetails = () => {
  const car = useLoaderData();

  // Destructure all fields from car
  const {
    name,
    image_url,
    deposit,
    mileage_limit,
    extra_mileage,
    payment,
    color,
    transmission,
    car_type,
    engine,
    seats,
    doors,
    zero_to_hundred,
    drive,
    fuel,
    luggage,
    daily,
    weekly,
    monthly,
    rating,
  } = car;

  return (
    <div className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg p-6 flex flex-col sm:flex-row md:max-w-4xl lg:max-w-5xl items-center mx-auto mt-10">
      {/* Images Section */}
      <div className="relative w-full sm:w-1/2">
        <motion.div
          className="flex overflow-x-auto space-x-4"
          whileHover={{ scale: 1.05 }} // Only images zoom
        >
          <img
            src={image_url}
            alt={name}
            className="w-full object-cover rounded-lg"
          />
        </motion.div>
      </div>

      {/* Details Section */}
      <div className="w-full sm:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>

        {/* ⭐ Rating
        <div className="flex items-center mb-3">
          <span className="text-yellow-500 text-lg mr-1">⭐</span>
          <span className="font-medium">{rating}</span>
        </div> */}

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>Deposit: {deposit}</div>
          <div>Mileage Limit: {mileage_limit}</div>
          <div>Extra Mileage: {extra_mileage}</div>
          <div>Payment: {payment}</div>
          <div>Color: {color}</div>
          <div>Transmission: {transmission}</div>
          <div>Car Type: {car_type}</div>
          <div>Engine: {engine}</div>
          <div>Seats: {seats}</div>
          <div>Doors: {doors}</div>
          <div>Drive: {drive}</div>
          <div>Luggage: {luggage}</div>
          <div>Fuel: {fuel}</div>
          <div>0-100: {zero_to_hundred}</div>
        </div>

        <p className="text-xs mt-2 text-gray-500">
          Note: Prices inclusive of VAT & Deposit Fee
        </p>

        <div className="flex flex-col sm:flex-row justify-between mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
          <div>
            <p className="font-semibold">Daily</p>
            <p>₫{daily}</p>
            <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
              WhatsApp
            </button>
          </div>
          <div>
            <p className="font-semibold">Weekly</p>
            <p>{weekly}</p>
            <button className="mt-2 bg-gray-200 text-gray-900 px-3 py-1 rounded">
              Call us
            </button>
          </div>
          <div>
            <p className="font-semibold">Monthly</p>
            <p>{monthly}</p>
            <button className="mt-2 bg-yellow-600 text-white px-3 py-1 rounded">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
