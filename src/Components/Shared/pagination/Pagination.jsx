import React from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPage }) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 py-10">
      {currentPage > 0 && (
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          className="btn bg-linear-to-r from-orange-400 to-orange-600 
             hover:bg-orange-600 text-white font-medium"
        >
          Prev
        </button>
      )}

      {Array.from({ length: totalPage }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`btn ${
            i === currentPage
              ? "bg-linear-to-r from-orange-400 to-orange-600 text-white"
              : ""
          }`}
        >
          {i + 1}
        </button>
      ))}

      {currentPage < totalPage - 1 && (
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          className="btn bg-linear-to-r from-orange-400 to-orange-600 
             hover:bg-orange-600 text-white font-medium"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
