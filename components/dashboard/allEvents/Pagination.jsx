"use client";

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className="flex justify-center mt-10 gap-2 flex-wrap">
      {Array.from({ length: totalPages || 1 }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentPage(idx + 1)}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
            currentPage === idx + 1
              ? "bg-teal-500 text-white border-teal-500"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
}
