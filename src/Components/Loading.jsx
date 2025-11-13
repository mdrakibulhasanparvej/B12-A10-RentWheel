import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
      <div className="flex items-center  justify-center h-screen ">
        <div className="flex items-center text-gray-800 dark:text-white text-5xl font-bold space-x-2">
          <span className="text-gray-800 dark:text-white">L</span>
          <span className="loading loading-spinner loading-xl text-orange-500"></span>
          <span className="text-gray-800 dark:text-white">OADING</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Loading;
