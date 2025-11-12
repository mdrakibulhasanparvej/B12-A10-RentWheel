import React, { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router";

const CarNotFound = ({ error }) => {
  useTitle("Car-Not-Found");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center bg-gradient-to-b from-gray-50 to-white px-6 py-12">
      {/* Illustration */}
      <img
        src="/App-Error.png"
        alt="Cars Not Found Illustration"
        className="w-[250px] mb-6 animate-pulse"
      />

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-2">
        OOPS!! NO CAR ADDED
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
        {error} Sorry! The car you're looking for doesn't exist or has been
        removed from our system. Please try adding other car.
      </p>

      {/* Button */}
      <Link
        to="/all-cars"
        className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-8 py-2 rounded-full shadow-md transition duration-200"
      >
        Broswe for car
      </Link>
    </div>
  );
};

export default CarNotFound;

// import React from "react";

// const CarNotFound = () => {
//   return (
//     <div>
//       <h2>Car not Found</h2>
//     </div>
//   );
// };

// export default CarNotFound;
