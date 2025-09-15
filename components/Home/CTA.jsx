"use client";

import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-teal-500 dark:bg-gray-900 py-24 px-6 text-center text-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Host Your Event?
        </h2>

        {/* Section Description */}
        <p className="text-lg md:text-xl mb-8">
          Join Eventora today and create, manage, and book events effortlessly.
          Connect with your audience and make your events memorable and
          seamless.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* Primary CTA */}
          <Link
            href="/signUp"
            className="bg-yellow-400 dark:bg-teal-600 text-gray-900 dark:text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 dark:hover:bg-teal-700 transition-colors shadow-md"
          >
            Get Started
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white dark:border-teal-500 text-white dark:text-teal-500 font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-teal-500 dark:hover:bg-teal-500 dark:hover:text-white transition-colors shadow-md"
          >
            Contact Us
          </Link>
        </div>

        {/* Optional Note */}
        <p className="mt-6 text-gray-200 dark:text-gray-400 text-sm">
          No credit card required. Start your event journey today!
        </p>
      </div>
    </section>
  );
};

export default CTA;
