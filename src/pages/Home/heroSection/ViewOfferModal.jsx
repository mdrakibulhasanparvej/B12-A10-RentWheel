import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaTag, FaPercent, FaCalendarAlt, FaCar } from "react-icons/fa";
import { Link } from "react-router";

const ViewOfferModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full max-w-3xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold">
                  Special <span className="text-orange-500">Offers</span>
                </h3>
                <button
                  onClick={onClose}
                  className="btn btn-sm btn-circle btn-ghost"
                >
                  <IoClose className="text-xl" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 grid sm:grid-cols-2 gap-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <FaPercent className="text-3xl text-orange-500" />
                  <div>
                    <h4 className="font-semibold">Up to 20% Discount</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Enjoy special discounts on selected cars for limited-time
                      bookings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <FaCalendarAlt className="text-3xl text-orange-500" />
                  <div>
                    <h4 className="font-semibold">Weekend Deals</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Book for weekends and get exclusive price reductions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <FaCar className="text-3xl text-orange-500" />
                  <div>
                    <h4 className="font-semibold">Premium Cars on Offer</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Luxury and premium cars available with special pricing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <FaTag className="text-3xl text-orange-500" />
                  <div>
                    <h4 className="font-semibold">Seasonal Promotions</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Limited seasonal offers you don’t want to miss.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-3 justify-end">
                <button onClick={onClose} className="btn btn-sm btn-outline">
                  Close
                </button>
                <Link
                  to="/viewOffers"
                  className="btn btn-sm bg-linear-to-r from-orange-400 to-orange-600 text-white border-none"
                >
                  View Offers
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ViewOfferModal;
