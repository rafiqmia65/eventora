"use client";

import React from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Event Planner",
    message:
      "Eventora made managing my events so easy! The booking and dashboard features are top-notch.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Smith",
    role: "Corporate Manager",
    message:
      "I love how intuitive the platform is. It saved us a lot of time during our last corporate event.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Wedding Coordinator",
    message:
      "The interface is beautiful and responsive. My clients loved the online booking feature!",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center px-4 lg:px-0">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          What Our Users Say
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12">
          Testimonials from happy clients who trust Eventora for their events.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-teal-100 dark:bg-teal-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-teal-400 dark:border-teal-300"
              />
              <p className="text-gray-900 dark:text-gray-100 mb-2">
                "{testimonial.message}"
              </p>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
