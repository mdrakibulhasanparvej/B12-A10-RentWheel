import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
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
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
          Have questions, feedback, or need support? Get in touch with
          RentWheels — we’re here to help you anytime.
        </p>
      </motion.div>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 pb-16 grid lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Reach out to us through any of the following channels. Our support
            team usually responds within 24 hours.
          </p>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-orange-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                +880 1610 281338
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-orange-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                support@rentwheels.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Upazila: Savar, District: Dhaka.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 md:p-8"
        >
          <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full mt-1 bg-transparent"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full mt-1 bg-transparent"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="textarea textarea-bordered w-full mt-1 bg-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn w-full bg-linear-to-r from-orange-400 to-orange-600 text-white border-none"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactUs;
