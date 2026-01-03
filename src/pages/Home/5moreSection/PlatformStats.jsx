import { motion } from "framer-motion";
import { FaCar, FaUsers, FaStar, FaHandshake } from "react-icons/fa";

const stats = [
  {
    icon: <FaCar className="text-4xl text-orange-500" />,
    value: 500,
    label: "Cars Available",
  },
  {
    icon: <FaUsers className="text-4xl text-orange-500" />,
    value: 1200,
    label: "Happy Customers",
  },
  {
    icon: <FaStar className="text-4xl text-orange-500" />,
    value: 4.8,
    label: "Average Rating",
  },
  {
    icon: <FaHandshake className="text-4xl text-orange-500" />,
    value: 150,
    label: "Trusted Partners",
  },
];

const PlatformStats = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="w-full mx-auto px-5 md:px-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-extrabold dark:text-white comfortaa">
            Platform{" "}
            <span className="text-orange-500 comfortaa">Statistics</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trust RentWheels — check out our growth and achievements.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold mb-1 dark:text-white">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;
