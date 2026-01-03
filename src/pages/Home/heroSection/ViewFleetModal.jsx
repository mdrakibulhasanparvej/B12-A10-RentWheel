import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaCarSide, FaGasPump, FaUsers, FaCogs } from "react-icons/fa";
import { Link } from "react-router";

const ViewFleetModal = ({ isOpen, onClose }) => {
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
                  Explore Our <span className="text-orange-500">Fleet</span>
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
                  <FaCarSide className="text-3xl text-orange-500" />
                  <div>
                    <h4 className="font-semibold">Sedans & Hatchbacks</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Comfortable city rides for daily travel and business use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <FaUsers className="text-3xl text-orange-500" />
                  <div>
                    <h4 className="font-semibold">SUVs & Family Cars</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Spacious vehicles perfect for family trips and long
                      drives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <FaGasPump className="text-3xl text-orange-500" />
                  <div>
                    <h4 className="font-semibold">Fuel Efficient Cars</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Save more with economical and eco-friendly options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <FaCogs className="text-3xl text-orange-500" />
                  <div>
                    <h4 className="font-semibold">Automatic & Manual</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Choose between automatic or manual transmission cars.
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
                  to="/all-cars"
                  className="btn btn-sm bg-linear-to-r from-orange-400 to-orange-600 text-white border-none"
                >
                  Browse Cars
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ViewFleetModal;
