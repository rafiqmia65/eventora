"use client";
import React from "react";
import Link from "next/link";

const Hero = () => (
  <section className="bg-teal-500 dark:bg-gray-900 text-white py-28 px-6 text-center">
    <h1 className="text-5xl font-bold mb-4">Welcome to Eventora</h1>
    <p className="text-xl mb-6 max-w-2xl mx-auto">
      The all-in-one platform to create, manage, and book events effortlessly.
      Whether you are planning a small meetup, corporate conference, or large
      festival, Eventora has you covered.
    </p>

    <div className="flex justify-center gap-4 mb-10 flex-wrap">
      <span className="bg-yellow-400 dark:bg-teal-600 text-gray-900 dark:text-white px-4 py-2 rounded-full font-medium">
        Secure Booking
      </span>
      <span className="bg-yellow-400 dark:bg-teal-600 text-gray-900 dark:text-white px-4 py-2 rounded-full font-medium">
        Insights & Analytics
      </span>
    </div>

    <Link
      href="/events"
      className="bg-yellow-400 dark:bg-teal-600 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 dark:hover:bg-teal-700 transition-colors shadow-lg"
    >
      Get Started
    </Link>

    <p className="mt-6 text-sm text-gray-100 dark:text-gray-300">
      Join thousands of organizers who trust Eventora for their events.
    </p>
  </section>
);

export default Hero;
