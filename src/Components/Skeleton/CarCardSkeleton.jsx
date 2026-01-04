import React from "react";
import { motion } from "framer-motion";

const CarCardSkeleton = () => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden p-4 flex flex-col relative animate-pulse"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Status Badge */}
      <div className="absolute top-2 right-2 w-16 h-5 rounded-full bg-gray-300 dark:bg-gray-600" />

      {/* Car Image */}
      <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4" />

      {/* Car Info */}
      <div className="flex flex-col gap-2">
        <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
        <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded" />
        <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded" />
        <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded" />
      </div>

      {/* View Details Button */}
      <div className="mt-4 h-8 w-full bg-gray-300 dark:bg-gray-600 rounded" />
    </motion.div>
  );
};

export default CarCardSkeleton;
