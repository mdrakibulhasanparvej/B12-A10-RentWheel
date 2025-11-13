import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../proviedrs/AuthProvider";
import { toast } from "react-toastify";

const CarDetails = () => {
  const car = useLoaderData();
  const { user } = useContext(AuthContext);

  const [currentStatus, setCurrentStatus] = useState(car.status); // Track local status
  const [loading, setLoading] = useState(false); // Track button state

  const {
    name,
    description,
    category,
    rent_per_day,
    location,
    image_url,
    provider_name,
    provider_email,
  } = car;
  // console.log(car._id);
  const handleBooknow = async () => {
    if (currentStatus === "booked") return; // Prevent double booking
    setLoading(true);

    try {
      // 1️ Prepare booking data
      const bookingData = {
        id: car._id,
        name: car.name,
        description: car.description,
        category: car.category,
        rent_per_day: car.rent_per_day,
        location: car.location,
        image_url: car.image_url,
        provider_name: car.provider_name,
        provider_email: car.provider_email,
        user_name: user.displayName,
        user_email: user.email,
        created_date: new Date(),
        status: "booked",
      };

      // 2️ Insert booking
      const bookingRes = await fetch(
        "https://rent-wheels-server-eosin.vercel.app/bookings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        }
      );

      const bookingResult = await bookingRes.json();
      if (bookingResult) {
        toast.success("Booking successful! Car is now booked.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      // console.log("Booking saved:", bookingResult);

      // 3️ Update car status
      const bookedStatus = { _id: car._id, status: "booked" };
      const statusRes = await fetch(
        "https://rent-wheels-server-eosin.vercel.app/cars_booked",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookedStatus),
        }
      );

      const statusResult = await statusRes.json();

      if (statusRes.ok) {
        // console.log("Car status updated:", statusResult);
        setCurrentStatus("booked"); // Update local status
        toast.success("Booking successful! Car is now booked.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        console.error("Failed to update car status:", statusResult);
        toast.error(statusResult.error || "Failed to book car.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Error booking car:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false); // Re-enable if needed (optional)
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-10">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 p-3 w-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={image_url}
            alt={name}
            className="w-full  h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Details Section */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">{name}</h2>
            <p className="text-gray-600 dark:text-gray-400  mb-4">
              {description}
            </p>

            <div className="grid grid-cols-2 gap-2 text-sm mb-4">
              <div>
                <strong>Category:</strong> {category}
              </div>
              <div>
                <strong>Location:</strong> {location}
              </div>
              <div>
                <strong>Status:</strong> {currentStatus}
              </div>
              <div>
                <strong>Provider:</strong> {provider_name}
              </div>
              <div>
                <strong>Email:</strong> {provider_email}
              </div>
            </div>

            <p className="text-lg font-semibold mb-4">
              Rent Price: ${rent_per_day}
            </p>
          </div>

          <button
            onClick={handleBooknow}
            disabled={currentStatus === "booked" || loading}
            className={`${
              currentStatus === "booked" || loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-600 hover:bg-yellow-700"
            } text-white font-semibold px-5 py-2 rounded transition-all`}
          >
            {currentStatus === "booked"
              ? "Booked"
              : loading
              ? "Booking..."
              : "Book Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
