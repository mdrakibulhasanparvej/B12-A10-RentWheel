import React from "react";
import CarType from "./CarType";
import WhylikeUs from "./WhylikeUs";
import HeroSection from "./heroSection/HeroSection";
import BrandCarousel from "./BrandSection/BrandCarousel";
import ReviewSection from "./ReviewSection/ReviewSection";
import FeaturedCars from "./FeaturedCars";
import useTitle from "../../hooks/useTitle";
import HowItWorks from "./5moreSection/HowItWorks";
import SpecialOffers from "./5moreSection/SpecialOffers";
import PlatformStats from "./5moreSection/PlatformStats";
import PopularLocations from "./5moreSection/PopularLocations";
import CTASection from "./5moreSection/CTASection";

const Home = () => {
  useTitle("Home");
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandCarousel />
      <CarType />
      <HowItWorks />
      <FeaturedCars />
      <SpecialOffers />
      <PlatformStats />
      <WhylikeUs />
      <PopularLocations />
      <ReviewSection />
      <CTASection />
    </div>
  );
};

export default Home;
