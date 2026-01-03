import { motion } from "framer-motion";
import { FaPercent, FaCalendarAlt, FaCar, FaTag } from "react-icons/fa";
import { Link } from "react-router";

const offers = [
  {
    icon: <FaPercent className="text-3xl text-orange-500" />,
    title: "Up to 20% Off",
    desc: "Save big on select cars for a limited time.",
    tag: "Limited",
  },
  {
    icon: <FaCalendarAlt className="text-3xl text-orange-500" />,
    title: "Weekend Deals",
    desc: "Exclusive discounts for weekend bookings.",
    tag: "Weekend",
  },
  {
    icon: <FaCar className="text-3xl text-orange-500" />,
    title: "Premium Cars",
    desc: "Luxury cars available at special prices.",
    tag: "Premium",
  },
  {
    icon: <FaTag className="text-3xl text-orange-500" />,
    title: "Seasonal Offers",
    desc: "Limited seasonal promotions available now.",
    tag: "Seasonal",
  },
];

const SpecialOffers = () => {
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
            Special <span className="text-orange-500 comfortaa">Offers</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take advantage of our latest offers and discounts. Book your car
            today!
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">{offer.icon}</div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {offer.desc}
              </p>
              <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                {offer.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <Link
            to="/viewOffers"
            className="btn bg-linear-to-r from-orange-400 to-orange-600 text-white"
          >
            View All Offers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
