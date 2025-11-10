import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex items-center justify-center h-screen ">
        <div className="flex items-center text-5xl font-bold space-x-2">
          <span>L</span>
          <span className="loading loading-spinner loading-xl text-orange-500"></span>
          <span>OADING</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Loading;
