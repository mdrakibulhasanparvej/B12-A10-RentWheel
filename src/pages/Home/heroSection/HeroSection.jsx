import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import SwiperSlider from "./SwiperSlider";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { toast } from "react-toastify";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  // const [loading, setLoading] = useState(false);

  // console.log(cars);

  useEffect(() => {
    // setLoading(true); // start loader
    fetch("https://rent-wheels-server-eosin.vercel.app/cars")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cars.");
        return res.json();
      })
      .then((data) => {
        setCars(data);
        // setLoading(false); // stop loader
      })
      .catch((err) => {
        toast.error(
          err.message || "Something went wrong while fetching cars.",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        console.error("Fetch cars error:", err);
        // setLoading(false); // stop loader
      });
  }, []); //loading

  // Filter cars safely
  useEffect(() => {
    try {
      if (!query.trim()) {
        setFilteredCars([]);
        setShowDropdown(false);
      } else {
        if (!Array.isArray(cars)) throw new Error("Cars data is invalid.");
        const results = cars.filter((car) =>
          car.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCars(results);
        setShowDropdown(true);
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong while filtering cars.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Filter cars error:", err);
    }
  }, [query, cars]);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <SwiperSlider />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-semibold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Luxury Car Rental in <br />
          <span className="text-orange-500 inline-block h-10">
            <Typewriter
              words={["Dhaka", "Chittagong", "Rajshahi"]}
              loop={true}
              typeSpeed={180}
              deleteSpeed={80}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Experience luxury cars for your journey. Comfort & performance await
          you.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="relative w-full max-w-md mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <input
            type="text"
            placeholder="Search cars by name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-full text-black bg-white focus:outline-none shadow-lg"
          />

          {/* Dropdown */}
          {showDropdown && filteredCars.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white text-black rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto z-50">
              {filteredCars.map((car) => (
                <NavLink
                  key={car._id}
                  to={`/cardetails/${car._id}`}
                  className="block"
                  onClick={() => setShowDropdown(false)} // optional: close dropdown on click
                >
                  <li className="flex items-center gap-3 px-3 py-2 border-b hover:bg-gray-100 cursor-pointer">
                    <img
                      src={car.image_url}
                      alt={car.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{car.name}</h3>
                      <p className="text-sm text-gray-600">
                        ${car.rent_per_day}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        car.status == "booked"
                          ? "bg-red-200 text-red-700"
                          : "bg-green-200 text-green-700"
                      }`}
                    >
                      {car.status == "booked" ? "Booked" : "Available"}
                    </span>
                  </li>
                </NavLink>
              ))}
            </ul>
          )}

          {showDropdown && filteredCars.length === 0 && (
            <div className="absolute top-full left-0 w-full bg-white text-black rounded-lg shadow-lg p-3 mt-1 z-50">
              No cars found.
            </div>
          )}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition font-semibold">
            View Fleet
          </button>
          <button className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition font-semibold">
            Special Offers
          </button>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          className="mt-10 text-orange-500 font-semibold text-lg tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          ☆ No Deposit ☆
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
