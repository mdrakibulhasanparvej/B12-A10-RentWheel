import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import { Typewriter } from "react-simple-typewriter";

const ReviewSection = () => {
  const reviews = [
    {
      name: "Yanis Aithassaine",
      rating: "7 months ago",
      review:
        "I rented several cars with this agency during my stay in Dubai and everything went really well.",
      image: "https://via.placeholder.com/40?text=Y",
    },
    {
      name: "Naim Cherissi",
      rating: "7 months ago",
      review:
        "Extremely happy with the experience. From the moment I arrived, the team was welcoming, professional and fast.",
      image: "https://via.placeholder.com/40?text=N",
    },
    {
      name: "Camyl Hadjad",
      rating: "7 months ago",
      review:
        "I had a remarkable stay with my partner aboard this magnificent McLaren. Highly recommended!",
      image: "https://via.placeholder.com/40?text=C",
    },
    {
      name: "Omar Ali",
      rating: "6 months ago",
      review:
        "Great communication and super quick service. Will rent again next time I’m in Dubai.",
      image: "https://via.placeholder.com/40?text=O",
    },
    {
      name: "Sara Ben",
      rating: "5 months ago",
      review: "Fantastic service! Quick pickup and amazing car condition.",
      image: "https://via.placeholder.com/40?text=S",
    },
  ];

  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // 🔧 Determine how many cards visible based on screen width
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const totalGroups = Math.ceil(reviews.length / cardsPerView);

  const nextReview = () => setIndex((prev) => (prev + 1) % totalGroups);
  const prevReview = () =>
    setIndex((prev) => (prev - 1 + totalGroups) % totalGroups);

  // 👇 Auto-scroll once after load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(1);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 px-10 mx-auto py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-1/3 w-full  top-20 self-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            RENTWHEELS Luxury Car Rental
          </h2>
          <p className="text-orange-500 font-medium">
            {" "}
            <Typewriter
              words={["Dhaka", "Chittagong", "Rajshahi"]}
              loop={true}
              typeSpeed={180}
              deleteSpeed={80}
            />
          </p>
          <div className="flex items-center mt-2">
            <span className="text-orange-500 text-lg font-semibold">
              4.9 ★★★★★
            </span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">
              Based on 6003 reviews
            </span>
          </div>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Review us on Google
          </button>
        </motion.div>

        {/* RIGHT SIDE SLIDER */}
        <div className="lg:w-2/3 w-full relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${index * (18 * cardsPerView)}rem)`,
              }}
            >
              {reviews.map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={prevReview}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 rounded hover:bg-orange-500 hover:text-white transition"
            >
              ⬅ Prev
            </button>
            <button
              onClick={nextReview}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 rounded hover:bg-orange-500 hover:text-white transition"
            >
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
