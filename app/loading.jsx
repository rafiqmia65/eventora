"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-teal-500 dark:border-yellow-400 mb-6"></div>

      {/* Loading text */}
      <p className="text-xl md:text-2xl font-semibold">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
