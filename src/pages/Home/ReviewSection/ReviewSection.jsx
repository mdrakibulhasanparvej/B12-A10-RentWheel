import React from "react";
import ReviewCard from "./ReviewCard";

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
      review: "Fantastic service! Quick pickup and amazing car condition.",
      image: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 px-10 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          RENTWHEELS Luxury Car Rental
        </h2>
        <p className="text-orange-500 font-medium h-5 mt-1">
          Dhaka • Chittagong • Rajshahi
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
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee gap-6">
          {reviews.concat(reviews).map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
