import { motion } from "framer-motion";
import { FaSearch, FaCalendarCheck, FaCarSide } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-3xl text-orange-500" />,
    title: "Browse Cars",
    desc: "Explore a wide range of cars from trusted local providers and choose the one that fits your needs.",
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-orange-500" />,
    title: "Book Instantly",
    desc: "Select your rental dates, check availability, and confirm your booking securely in minutes.",
  },
  {
    icon: <FaCarSide className="text-3xl text-orange-500" />,
    title: "Drive & Enjoy",
    desc: "Pick up your car and enjoy a smooth, comfortable driving experience with RentWheels.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="w-full mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold dark:text-white comfortaa">
            How It <span className="text-orange-500 comfortaa">Works</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Renting a car with RentWheels is fast, simple, and hassle-free. Just
            follow these easy steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
