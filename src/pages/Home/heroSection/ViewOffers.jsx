import { motion } from "framer-motion";
import { FaTag, FaPercent, FaCalendarAlt, FaCar } from "react-icons/fa";
import { Link } from "react-router";

const offers = [
  {
    icon: <FaPercent className="text-3xl text-orange-500" />,
    title: "Up to 20% Off",
    desc: "Get up to 20% discount on selected cars for a limited time.",
    tag: "Limited Time",
  },
  {
    icon: <FaCalendarAlt className="text-3xl text-orange-500" />,
    title: "Weekend Special",
    desc: "Special pricing available on all weekend bookings.",
    tag: "Weekend Deal",
  },
  {
    icon: <FaCar className="text-3xl text-orange-500" />,
    title: "Premium Car Deals",
    desc: "Luxury and premium cars now available at discounted rates.",
    tag: "Premium",
  },
  {
    icon: <FaTag className="text-3xl text-orange-500" />,
    title: "Seasonal Offer",
    desc: "Enjoy exclusive seasonal promotions you don’t want to miss.",
    tag: "Seasonal",
  },
];

const ViewOffers = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-4"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Current <span className="text-orange-500">Offers</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
          Discover the best deals and discounts available on RentWheels. Book
          your ride today and save more.
        </p>
      </motion.div>

      {/* Offers Grid */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-4">
              {offer.icon}
              <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                {offer.tag}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {offer.desc}
            </p>
            <Link
              to="/all-cars"
              className="btn btn-sm w-full bg-linear-to-r from-orange-400 to-orange-600 text-white border-none"
            >
              Browse Cars
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default ViewOffers;
