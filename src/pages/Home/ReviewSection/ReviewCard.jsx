import React from "react";
import { motion } from "framer-motion";

const ReviewCard = ({ name, rating, review, image }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 text-gray-900 dark:text-white mx-2 w-72 flex-shrink-0 border border-orange-500/30"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-3">
        <img src={image} alt={name} className="w-10 h-10 rounded-full mr-2" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{rating}</p>
        </div>
      </div>
      <p className="text-sm">{review}</p>
    </motion.div>
  );
};
export default ReviewCard;
