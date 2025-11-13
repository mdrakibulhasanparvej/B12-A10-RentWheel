import React from "react";
import { motion } from "framer-motion";
import useTitle from "../hooks/useTitle";

const MyProfile = () => {
  useTitle("My-Profile");
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          My profie
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm"></p>
      </div>
      <motion.div
        className="p-6 border border-gray-200 rounded-2xl dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Top Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6 border border-gray-400 rounded-2xl p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Profile Info */}
          <div className="flex flex-col items-center lg:flex-row gap-6">
            {/* Profile Image */}
            <motion.div
              className="w-28 h-28 rounded-full overflow-hidden border border-gray-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text Info */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Rakibul Hasan
              </h2>
              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Full-Stack Developer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <motion.button
            className="px-5 py-2 border border-gray-300 rounded-full bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Edit Profile
          </motion.button>
        </motion.div>

        {/* Basic Info Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 border border-gray-400 rounded-2xl p-5 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              First Name
            </p>
            <p className="font-medium text-gray-800 dark:text-white">Rakibul</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last Name
            </p>
            <p className="font-medium text-gray-800 dark:text-white">Hasan</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
            <p className="font-medium text-gray-800 dark:text-white">
              rakibul@example.com
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
            <p className="font-medium text-gray-800 dark:text-white">
              +880 1711 223344
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">Bio</p>
            <p className="font-medium text-gray-800 dark:text-white">
              Passionate full-stack developer specialized in React & Node.js.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
            <p className="font-medium text-gray-800 dark:text-white">
              Dhaka, Bangladesh
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="border border-gray-400 rounded-2xl p-5 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Social Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Facebook
              </p>
              <p className="font-medium text-gray-800 dark:text-white">
                facebook.com/rakibul
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                LinkedIn
              </p>
              <p className="font-medium text-gray-800 dark:text-white">
                linkedin.com/in/rakibul
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Instagram
              </p>
              <p className="font-medium text-gray-800 dark:text-white">
                instagram.com/rakibul
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                X (Twitter)
              </p>
              <p className="font-medium text-gray-800 dark:text-white">
                x.com/rakibul
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MyProfile;
