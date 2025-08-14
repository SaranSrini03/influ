"use client";
import { useState } from "react";
import InfluencerCard from "@/components/Card";
import SearchSortBar from "@/components/SearchSortBar";


const fakeData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
}));

export default function InfluencerPage() {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(fakeData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = fakeData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen px-18 py-10 bg-gray-50">
      <div className="w-[94rem] mx-auto ">
        <SearchSortBar />
      </div>
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-semibold ml-30 text-gray-800">
          {fakeData.length} Results
        </h1>
        <button className="bg-gradient-to-r from-[#264d99] to-[#66b3ff] text-white text-sm px-4 py-2 mr-30 rounded-full hover:opacity-90">
          Add all to campaign
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {visibleItems.map((item) => (
          <InfluencerCard key={item.id} />
        ))}
      </div>


      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-10 text-sm text-gray-500">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-1 rounded  hover:bg-gray-200"
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        {/* First 5 pages */}
        {[...Array(Math.min(5, totalPages)).keys()].map((i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 rounded border border-gray-500 ${currentPage === i + 1
              ? "bg-white text-blue-500"
              : "hover:bg-gray-200 text-gray-500"
              }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Ellipsis if more pages */}
        {totalPages > 5 && <span className="px-2">...</span>}

        {/* Last page */}
        {totalPages > 5 && (
          <button
            onClick={() => handlePageChange(totalPages)}
            className={`px-3 py-1 rounded border border-[#151515] ${currentPage === totalPages
              ? "bg-white text-blue-500"
              : "hover:bg-gray-200 text-black"
              }`}
          >
            {totalPages}
          </button>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-1 rounded  hover:bg-gray-200"
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>

    </div>
  );
}
