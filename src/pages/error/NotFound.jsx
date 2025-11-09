import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900 overflow-hidden text-center">
      {/* Subtle Animated Shape Background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-10"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      >
        <div className="w-96 h-96 bg-orange-500/30 blur-3xl rounded-full absolute top-1/3 left-1/4"></div>
        <div className="w-80 h-80 bg-yellow-400/20 blur-3xl rounded-full absolute top-1/2 right-1/3"></div>
      </motion.div>

      {/* Main Content */}
      <div className="z-10 max-w-lg w-full flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-orange-500 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          The page you’re looking for doesn’t exist or may have been moved.
          Please check the URL or go back to the homepage.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span>🏠</span> Back to Home
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} — RentWheels
      </footer>
    </div>
  );
};

export default NotFound;
