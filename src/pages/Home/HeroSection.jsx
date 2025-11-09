import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://cdn.mkrentacar.com/wp-content/uploads/2025/09/mk-sf90-red-banner-1-1-1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-2xl">
        <motion.h1
          className="text-4xl md:text-5xl font-semibold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Luxury Car Rental in <br />{" "}
          <span className="text-orange-500 inline-block h-10">
            {" "}
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
          className="flex justify-center items-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex bg-white text-gray-700 rounded-full shadow-lg overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="Search for brand and models"
              className="grow px-4 py-3 text-sm focus:outline-none"
            />
            <button className="px-4 bg-transparent hover:bg-gray-100">
              <FaSearch className="text-gray-500 text-lg" />
            </button>
          </div>
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

        {/* No Deposit Text */}
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
