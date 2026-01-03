import { motion } from "framer-motion";
import { FaCarSide, FaUsers, FaShieldAlt, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaCarSide className="text-3xl text-orange-500" />,
    title: "Wide Range of Cars",
    desc: "Browse and rent from a variety of well-maintained cars listed by trusted local providers."
  },
  {
    icon: <FaUsers className="text-3xl text-orange-500" />,
    title: "Trusted Providers",
    desc: "All listings come from verified owners and rental partners to ensure reliability and safety."
  },
  {
    icon: <FaShieldAlt className="text-3xl text-orange-500" />,
    title: "Secure Booking",
    desc: "Firebase authentication and protected routes keep your account and bookings secure."
  },
  {
    icon: <FaClock className="text-3xl text-orange-500" />,
    title: "24/7 Support",
    desc: "Our platform is designed for smooth usage anytime, anywhere, on any device."
  }
];

const About = () => {
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
          About <span className="text-orange-500">RentWheels</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
          RentWheels is a modern MERN-based car rental platform that connects renters with local car owners and rental providers. Our goal is to make car renting simple, transparent, and accessible for everyone.
        </p>
      </motion.div>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-10 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We aim to bridge the gap between car owners and renters by providing a secure, user-friendly, and reliable platform. Whether you need a car for a day or want to earn by listing your own vehicle, RentWheels makes the process seamless.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Technology Behind RentWheels</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            RentWheels is built using a modern technology stack to ensure performance, scalability, and a smooth user experience.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {["React", "Tailwind CSS", "DaisyUI", "Framer Motion", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Vercel", "Firebase Hosting"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-4 py-1 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;