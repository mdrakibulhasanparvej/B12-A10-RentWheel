import React from "react";
import { motion } from "framer-motion";
import { FaBookmark, FaHandshake } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdPriceChange } from "react-icons/md";

const features = [
  {
    icon: <FaBookmark className="text-3xl text-blue-500" />,
    title: "Easy Booking",
    description:
      "Reserve your favorite car in just a few clicks and hit the road without any hassle.",
  },
  {
    icon: <MdPriceChange className="text-3xl text-pink-500" />,
    title: "Affordable Rates",
    description:
      "Get the best cars at prices that won’t break the bank, making every ride worth it.",
  },
  {
    icon: <FaHandshake className="text-3xl text-red-500" />,
    title: "Trusted Providers",
    description:
      "Drive with confidence knowing all our cars come from verified and reliable providers.",
  },
  {
    icon: <BiSupport className="text-3xl text-green-500" />,
    title: "24/7 Support",
    description:
      "Our team is always ready to help, anytime you need assistance on your journey.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const WhylikeUs = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-5 md:px-10">
      <h2 className="text-3xl  comfortaa font-extrabold  text-center mb-8">
        Why Rent With Us!
      </h2>
      <div className="max-w-7xl mx-auto flex  md:flex-row items-center gap-10">
        {/* Left Features */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white group relative flex flex-col justify-center items-center gap-4 p-5 rounded-xl shadow-md overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={cardVariant}
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon with Circle */}
              <div className="p-3 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
                {item.icon}
              </div>

              {/* Title & Description */}
              <div className="text-center">
                <h3 className="text-lg font-semibold  mb-1">{item.title}</h3>
                <p className=" dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-black opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        {/* Right Image
        <div className="flex-1 flex justify-center">
          <motion.img
            src="https://cdn.pixabay.com/photo/2017/08/06/10/42/dentist-2591634_1280.jpg"
            alt="Dentist"
            className="rounded-3xl w-full md:w-[500px] object-cover shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default WhylikeUs;
