import React from "react";
import HeroSection from "./HeroSection";
import FeaturedCars from "./FeaturedCars";
import WhylikeUs from "./WhylikeUs";
import ReviewSection from "./ReviewSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCars />
      <WhylikeUs />
      <ReviewSection />
    </div>
  );
};

export default Home;
