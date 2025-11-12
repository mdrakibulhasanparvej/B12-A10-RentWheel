import React from "react";
import CarType from "./CarType";
import WhylikeUs from "./WhylikeUs";
import HeroSection from "./heroSection/HeroSection";
import BrandCarousel from "./BrandSection/BrandCarousel";
import ReviewSection from "./ReviewSection/ReviewSection";
import FeaturedCars from "./FeaturedCars";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandCarousel />
      <CarType />
      <FeaturedCars />
      <WhylikeUs />
      <ReviewSection />
    </div>
  );
};

export default Home;
