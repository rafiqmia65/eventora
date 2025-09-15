"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen py-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Eventora</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Learn more about who we are and what drives our passion for events.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80"
            alt="Event Management"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            At Eventora, our mission is to make event management simple,
            seamless, and enjoyable. We provide tools to create, manage, and
            book events efficiently, whether for business or personal use.
          </p>

          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We envision a world where event planning is effortless. Our goal is
            to provide the best platform for organizers and participants alike,
            connecting people through unforgettable experiences.
          </p>

          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Eventora is powered by a passionate team of developers, designers,
            and event specialists, dedicated to helping you create memorable
            events.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-block bg-teal-500 dark:bg-yellow-400 text-white dark:text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-600 dark:hover:bg-yellow-500 transition-colors shadow-md"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default About;
