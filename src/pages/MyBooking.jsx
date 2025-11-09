import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  // Simulated data — replace this with your API later
  useEffect(() => {
    const demoBookings = [
      {
        _id: "1",
        car_name: "BMW M4 Competition",
        car_image:
          "https://images.unsplash.com/photo-1617814076548-8a5b05c06513?auto=format&fit=crop&w=900&q=60",
        booked_date: "2025-11-08",
        price: 42000,
        status: "Confirmed",
      },
      {
        _id: "2",
        car_name: "Mercedes G63 AMG",
        car_image:
          "https://images.unsplash.com/photo-1606813902917-72e098b8fdee?auto=format&fit=crop&w=900&q=60",
        booked_date: "2025-11-04",
        price: 53000,
        status: "Pending",
      },
      {
        _id: "3",
        car_name: "Lamborghini Huracán",
        car_image:
          "https://images.unsplash.com/photo-1606813902924-96a8e7d4a0b3?auto=format&fit=crop&w=900&q=60",
        booked_date: "2025-10-27",
        price: 95000,
        status: "Completed",
      },
    ];
    setBookings(demoBookings);
  }, []);

  return (
    <div className="p-5">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          My Bookings
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Manage all your booked cars in one place.
        </p>
      </div>

      {/* Booking List */}
      {bookings.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 dark:text-gray-400">
            You haven’t booked any cars yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking, index) => (
            <motion.div
              key={booking._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white dark:bg-gray-900"
            >
              <img
                src={booking.car_image}
                alt={booking.car_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {booking.car_name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  📅 Date: {booking.booked_date}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  💰 Price: ${booking.price.toLocaleString()}
                </p>
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    booking.status === "Confirmed"
                      ? "bg-green-100 text-green-600"
                      : booking.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooking;
