import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BrandCarousel = () => {
  const brands = [
    {
      name: "Lamborghini",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/03/Tp2uven3h7-1.png",
    },
    {
      name: "Bentley",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/03/1unVcJlu27-1.png",
    },
    {
      name: "Ferrari",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/07/ferrari-1.png",
    },
    {
      name: "Rolls Royce",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/03/cdrp0674jG-1.png",
    },
    {
      name: "Porsche",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/03/zlj3UFz79n-1.png",
    },
    {
      name: "Mercedes",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/03/ZfXrHr4tP6-1.png",
    },
    {
      name: "Land Rover",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/03/7R5C0rp0y3.png",
    },
    {
      name: "Audi",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/03/0cID35vkiB.png",
    },
    {
      name: "chevrolet",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/03/mLF937C0hX.png",
    },
    {
      name: "BMW",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/03/sxI5jw9d0g.png",
    },
    {
      name: "Cadillac",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/03/Mcu96Jz47.png",
    },
    {
      name: "Nissan",
      logo: "https://cdn.mkrentacar.com/wp-content/uploads/2025/03/4G2hn8v9i.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Determine how many cards visible based on screen width
  //   useEffect(() => {
  //     const updateCards = () => {
  //       if (window.innerWidth < 640) setCardsPerView(1);
  //       else if (window.innerWidth < 1024) setCardsPerView(2);
  //       else setCardsPerView(3);
  //     };
  //     updateCards();
  //     window.addEventListener("resize", updateCards);
  //     return () => window.removeEventListener("resize", updateCards);
  //   }, []);

  const totalGroups = Math.ceil(brands.length / cardsPerView);

  const nextReview = () => setIndex((prev) => (prev + 1) % totalGroups);
  const prevReview = () =>
    setIndex((prev) => (prev - 1 + totalGroups) % totalGroups);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalGroups);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalGroups]);

  return (
    <div className="bg-white dark:bg-gray-900 px-10 mx-auto py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* RIGHT SIDE SLIDER */}
        <div className=" w-full relative">
          {/* Top buttons */}

          <div className="relative overflow-hidden">
            <div
              className="flex justify-evenly transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${index * (18 * cardsPerView)}rem)`,
              }}
            >
              {brands.map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 flex justify-between px-2 z-10">
            <button
              onClick={prevReview}
              className="text-5xl absolute top-5 left-0 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded hover:bg-orange-500/20  transition"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={nextReview}
              className="text-5xl absolute right-0 top-5 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded hover:bg-orange-500/20  transition"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
