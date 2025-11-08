import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Availability",
    icon: "📍",
    description:
      "Diam tincidunt tincidunt erat et semper fermentum. Iu ultrices quis",
  },
  {
    title: "Comfort",
    icon: "🚗",
    description:
      "Gravida auctor fermentum morbi vulputate ac egestas orciEtiam convallis",
  },
  {
    title: "Savings",
    icon: "👛",
    description:
      "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
  },
];

export default function AnimatedFeatureCards() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) controls.start("visible");

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-gray-100 rounded-xl p-6 shadow-md overflow-hidden"
          >
            {/* Gradient Overlay Fade */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-black opacity-0 group-hover:opacity-20 pointer-events-none"
              transition={{ duration: 0.4 }}
            />

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
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Learn More →
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
