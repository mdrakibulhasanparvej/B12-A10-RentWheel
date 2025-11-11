import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";
import { AuthContext } from "../proviedrs/AuthProvider";
import CarNotFound from "./error/CarNotFound";

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log(bookings, email);

  useEffect(() => {
    if (!email) return;

    const fetchBookings = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/cars?email=${email}`);

        if (!res.ok) throw new Error("User not found");

        const data = await res.json();
        setBookings(Array.isArray(data) ? data : [data]);
      } catch (err) {
        console.error(err);
        setError("Failed to load data");
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [email]);

  if (loading) return <Loading />;
  if (error) return <CarNotFound error={error} />;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          My Wish List
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          All wishlisted cars in one place.
        </p>
      </div>

      {bookings.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 dark:text-gray-400">
            You haven't wishlisted any cars yet!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking, index) => (
            <motion.div
              key={booking._id || index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white dark:bg-gray-900"
            >
              <img
                src={booking.image_url}
                alt={booking.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {booking.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Booking Status : {booking.booking_status}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Daily Price: ${booking.daily?.toLocaleString()}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Weekly Price: ${booking.daily?.toLocaleString()}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Monthly Price: ${booking.monthly?.toLocaleString()}
                </p>
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    booking.booking_status === "Confirmed"
                      ? "bg-green-100 text-green-600"
                      : booking.booking_status === "Pending"
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

export default MyListing;
