import { motion } from "framer-motion";

const features = [
  {
    title: "Top-Notch Quality",
    icon: "📍",
    description:
      "Diam tincidunt tincidunt erat et semper fermentum. Iu ultrices quis",
  },
  {
    title: "Affordable Luxury",
    icon: "🚗",
    description:
      "Gravida auctor fermentum morbi vulputate ac egestas orciEtiam convallis",
  },
  {
    title: "Outstanding Service",
    icon: "👛",
    description:
      "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
  },
  {
    title: "Easy Booking",
    icon: "👛",
    description:
      "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.18, // per-card delay (custom * 0.18s)
      ease: "easeOut",
    },
  }),
};

const WhylikeUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" text-3xl md:text-4xl font-semibold mb-10 text-center"
      >
        Why Chose Us!
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group relative bg-gray-100 rounded-xl p-6 shadow-md overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            variants={cardVariant}
            whileHover={{ scale: 1.04 }}
          >
            {/* Gradient Overlay Fade */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-black opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300" />

            {/* Icon */}
            <div className="text-4xl mb-4">{feature.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4">{feature.description}</p>

            {/* Arrow Slide */}
            <motion.div
              className="text-blue-500 font-medium flex items-center gap-1"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Learn More →
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhylikeUs;
