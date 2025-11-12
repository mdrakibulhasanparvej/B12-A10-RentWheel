import { motion } from "framer-motion";

const BrandCard = ({ name, logo }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-center p-4 m-2 w-full h-36 border border-gray-200 dark:border-gray-700 hover:shadow-orange-500/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={logo} alt={name} className="w-20 h-20 object-contain mb-2" />
      <p className="font-semibold text-gray-800 dark:text-white">{name}</p>
    </motion.div>
  );
};

export default BrandCard;
