import React from "react";
import HeroSection from "./HeroSection";
import FeaturedCars from "./FeaturedCars";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCars />
    </div>
  );
};

export default Home;
