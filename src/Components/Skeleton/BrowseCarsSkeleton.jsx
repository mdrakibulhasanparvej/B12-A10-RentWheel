import React from "react";
import CarCardSkeleton from "./CarCardSkeleton";

const BrowseCarsSkeleton = () => {
  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-5 md:px-10">
        {/* // filter section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between animate-pulse">
          {/* Category Skeleton */}
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-10 w-20 rounded bg-gray-300 dark:bg-gray-700"
              ></div>
            ))}
          </div>

          {/* Search Skeleton */}
          <div className="flex gap-2">
            <div className="h-10 w-48 rounded bg-gray-300 dark:bg-gray-700"></div>
            <div className="h-10 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Sort Skeleton */}
          <div className="h-10 w-36 rounded bg-gray-300 dark:bg-gray-700"></div>
        </div>
        {/* // card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, idx) => (
            <CarCardSkeleton key={idx} />
          ))}
        </div>
        {/* // pagination */}
        <div className="flex justify-center flex-wrap gap-3 py-10 animate-pulse">
          {/* Prev button */}
          <div className="h-10 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>

          {/* Page numbers */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-10 rounded bg-gray-300 dark:bg-gray-700"
            ></div>
          ))}

          {/* Next button */}
          <div className="h-10 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>
    </section>
  );
};

export default BrowseCarsSkeleton;
