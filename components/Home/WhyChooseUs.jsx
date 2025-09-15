"use client";

import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Intuitive Dashboard to manage events effortlessly",
  "Secure booking and payment system",
  "Real-time notifications for participants",
  "Customizable event settings and themes",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 px-6">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Why Choose Eventora?
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left: Image / Illustration */}
          <div className="flex-1">
            <img
              src="https://i.ibb.co.com/0jGHHqcJ/2151966684.jpg"
              alt="Eventora Illustration"
              className="rounded-xl shadow-lg w-[500px] h-[300px]"
            />
          </div>

          {/* Right: Benefits list */}
          <div className="flex-1 space-y-4 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="text-teal-500 dark:text-yellow-400 w-6 h-6" />
                <p className="text-gray-700 dark:text-gray-200">{benefit}</p>
              </div>
            ))}

            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Eventora empowers organizers to create, manage, and optimize
              events seamlessly. Whether you’re hosting a small workshop or a
              large conference, our platform ensures your events run smoothly
              and efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
