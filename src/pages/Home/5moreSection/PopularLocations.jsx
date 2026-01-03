import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  {
    city: "Dhaka",
    image:
      "https://media.istockphoto.com/id/1411872473/photo/the-city-of-dhaka-skyline-at-night-bangladesh-stock-photo.jpg?s=612x612&w=0&k=20&c=MOtHanhzE31wGLlFCOq16qXp6NR5KPOGNxytkfzBzJA=",
  },
  {
    city: "Chittagong",
    image:
      "https://www.shutterstock.com/image-photo/chattogram-bangladesh-september-19-2024-600nw-2519048105.jpg",
  },
  {
    city: "Khulna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/%E0%A6%B7%E0%A6%BE%E0%A6%9F-%E0%A6%97%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A7%81%E0%A6%9C-%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/2560px-%E0%A6%B7%E0%A6%BE%E0%A6%9F-%E0%A6%97%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A7%81%E0%A6%9C-%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg",
  },
  {
    city: "Rajshahi",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzah-n4C3Sr5vNuoz4unBlnwe6aqsEOAKkz9-QOYtJDNcuIx6KG0QBiWOrSrkarrO63YPr-a117cpDS1GY-ucL7Lonnc_o2500ORvFzXHOHaLJ8hdKujJ9omVJBO5phqctg7IIE=w810-h468-n-k-no",
  },
  {
    city: "Barishal",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzg3zfLx0_8eRux-6ca-_98kgyZ7JTDkwLyhnOltnRDfRnX7BJ9UrZWoO_17dnDDa5ektOFEVscK-utmfuFazKrDssuxuWOEH5EXZiV76LEf7qJ9Uvcvforr0z8ZFQZlkpu2_wtIQ=w810-h468-n-k-no",
  },
  {
    city: "Sylhet",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzuZGwMqFkwb2dveGhI7_xZbBA_puo41LsUAUvU-xCNHmwQwWmQFUKfi4jQBXEUQ3gkmziaeZOxsTIfzFUzMG1DD0isW5umoaH69aARu2xcdnJCWlNW1hv6U2Tm_Wy0OkByHvWKlA=w810-h468-n-k-no",
  },
];

const PopularLocations = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
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
            Popular <span className="text-orange-500 comfortaa">Locations</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Rent cars from top cities across the Bangladesh with ease.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={loc.image}
                alt={loc.city}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 flex items-center gap-2">
                <FaMapMarkerAlt />
                <span className="font-semibold">{loc.city}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;
