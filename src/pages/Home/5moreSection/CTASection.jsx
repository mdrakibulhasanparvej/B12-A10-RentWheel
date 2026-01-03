import { motion } from "framer-motion";
import { Link } from "react-router";

const CTASection = () => {
  return (
    <section className="bg-orange-500 dark:bg-orange-600 py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-10 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-4 comfortaa"
        >
          Ready to drive?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm md:text-base mb-8 max-w-2xl mx-auto"
        >
          Choose your car, select your dates, and enjoy the ride. Start your
          journey with RentWheels today!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/all-cars"
            className="btn bg-white text-orange-500 font-semibold hover:bg-gray-100"
          >
            Browse Cars
          </Link>
          <Link
            to="/viewOffers"
            className="btn bg-white text-orange-500 font-semibold hover:bg-gray-100"
          >
            View Offers
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
