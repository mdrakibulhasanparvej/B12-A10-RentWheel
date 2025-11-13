import React, { useRef } from "react";
import BrandCard from "./BrandCard";
import Marquee from "react-fast-marquee";

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
      name: "Chevrolet",
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

  // Duplicate array for seamless loop
  const loopBrands = [...brands, ...brands];

  const containerRef = useRef();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-10 relative overflow-hidden">
      <h2 className="text-2xl comfortaa font-extrabold text-center text-gray-800 dark:text-white mb-6">
        Top Car Brands
      </h2>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Marquee Track */}
        <div ref={containerRef} className="flex gap-4 whitespace-nowrap">
          <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
            {loopBrands.map((brand, i) => (
              <div
                key={i}
                className="shrink-0 w-[11%] sm:w-[10%] md:w-[8%] lg:w-[8%]"
              >
                <BrandCard {...brand} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
