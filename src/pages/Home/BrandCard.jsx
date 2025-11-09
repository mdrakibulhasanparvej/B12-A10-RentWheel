import { motion } from "framer-motion";

const ReviewCard = ({ name, image }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 text-gray-900 dark:text-white  border-orange-500/30"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className=" mb-3">
        <img src={image} alt={name} className="w-10 h-10 rounded-full mb-2" />
        <p className="font-semibold">{name}</p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
