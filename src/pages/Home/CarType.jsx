import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const CarType = () => {
  const cars = [
    {
      id: 1,
      name: "SPORTS",
      image:
        "https://cdn.mkrentacar.com/wp-content/uploads/2025/09/SPORTS-2048x808.webp",
    },
    {
      id: 2,
      name: "SUV",
      image:
        "https://cdn.mkrentacar.com/wp-content/uploads/2025/09/780df4a1-164a-4d3d-aade-f3ad700f2456.webp",
    },
    {
      id: 3,
      name: "LUXURY",
      image:
        "https://cdn.mkrentacar.com/wp-content/uploads/2025/09/Luxury-2048x808.webp",
    },
    {
      id: 4,
      name: "EXOTIC",
      image:
        "https://cdn.mkrentacar.com/wp-content/uploads/2025/09/Exotic-2048x808.webp",
    },
    {
      id: 5,
      name: "CONVERTIBLE",
      image:
        "https://cdn.mkrentacar.com/wp-content/uploads/2025/09/CONVERTIBLE-2048x808-1.webp",
    },
    {
      id: 6,
      name: "ECONOMY",
      image:
        "https://cdn.mkrentacar.com/wp-content/uploads/2025/09/071754a9-2f02-446b-a1ac-f45a914d1741.webp",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" text-3xl md:text-4xl font-semibold mb-10 text-center"
        >
          Cars Types
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Car image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Text with arrow */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarType;
