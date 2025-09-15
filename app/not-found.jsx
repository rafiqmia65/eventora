"use client";
import "./globals.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6">
      <h1 className="text-8xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Page Not Found</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-md">
        Oops! The page you are looking for does not exist. It might have been removed or the URL is incorrect.
      </p>
      <Link
        href="/"
        className="bg-teal-500 dark:bg-yellow-400 text-white dark:text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-600 dark:hover:bg-yellow-500 transition-colors shadow-md"
      >
        Go Back Home
      </Link>
      <div className="mt-8">
        {/* <Image
          src="/404-illustration.png"
          alt="404 Illustration"
          className="w-3/4 md:w-1/2 mx-auto"
        /> */}
      </div>
    </div>
  );
};

export default NotFound;
