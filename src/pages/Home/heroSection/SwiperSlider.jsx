import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={1000}
      className="w-full h-full"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <img
          src="https://cdn.mkrentacar.com/wp-content/uploads/2025/03/rolls-royce-2-scaled.jpg"
          alt="Ferrari SF90"
          className="w-full h-full object-cover object-center"
        />
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <img
          src="https://cdn.mkrentacar.com/wp-content/uploads/2025/03/ford-scaled.jpg"
          alt="Lamborghini Huracan"
          className="w-full h-full object-cover object-center"
        />
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <img
          src="https://cdn.mkrentacar.com/wp-content/uploads/2025/03/bentley-scaled.jpg"
          alt="Rolls Royce Ghost"
          className="w-full h-full object-cover object-center"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
