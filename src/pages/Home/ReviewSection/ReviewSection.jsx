import React from "react";
import ReviewCard from "./ReviewCard";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";

const ReviewSection = () => {
  const reviews = [
    {
      name: "Yanis Aithassaine",
      rating: "7 months ago",
      review:
        "I rented several cars with this agency during my stay in Dubai and everything went really well.",
      image: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
    },
    {
      name: "Naim Cherissi",
      rating: "7 months ago",
      review:
        "Extremely happy with the experience. From the moment I arrived, the team was welcoming, professional and fast.",
      image: "https://cdn-icons-png.flaticon.com/128/16683/16683419.png",
    },
    {
      name: "Camyl Hadjad",
      rating: "7 months ago",
      review:
        "I had a remarkable stay with my partner aboard this magnificent McLaren. Highly recommended!",
      image: "https://cdn-icons-png.flaticon.com/128/560/560277.png",
    },
    {
      name: "Omar Ali",
      rating: "6 months ago",
      review:
        "Great communication and super quick service. Will rent again next time I’m in Dubai.",
      image: "https://cdn-icons-png.flaticon.com/128/4140/4140037.png",
    },
    {
      name: "Sara Ben",
      rating: "5 months ago",
      review:
        "Fantastic service! Quick pickup and amazing car condition.Will rent again next time I’m in Dubai.",
      image: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 px-5 md:px-10 pb-20 py-12">
      <div className="text-center">
        <h2 className="text-2xl  comfortaa font-extrabold -bold text-gray-900 dark:text-white">
          RENTWHEELS <br />{" "}
          <span className=" comfortaa font-extrabold ">
            Luxury Car Rental In
          </span>
        </h2>
        <p className="text-orange-500 font-medium h-5 mt-1">
          <span className="text-orange-500 inline-block h-10">
            <Typewriter
              words={["Dhaka", "Chittagong", "Rajshahi"]}
              loop={true}
              typeSpeed={180}
              deleteSpeed={80}
            />
          </span>
        </p>
        <div className="flex items-center justify-center mt-2 gap-2">
          <span className="text-orange-500 text-lg font-semibold">
            4.9 ★★★★★
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            Based on 6003 reviews
          </span>
        </div>
        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
          Review us on Google
        </button>
      </div>

      {/* MARQUEE EFFECT */}
      <div className="overflow-hidden relative py-10">
        <div className="flex gap-6">
          <Marquee
            direction="right"
            className="flex gap-5"
            pauseOnHover={true}
            speed={60}
          >
            {reviews.concat(reviews).map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
