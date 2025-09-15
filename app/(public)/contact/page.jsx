"use client";

import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic (API call / email)
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen py-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Have questions? We'd love to hear from you!
        </p>
      </div>

      {/* Form & Info */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 dark:bg-yellow-400 text-white dark:text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-600 dark:hover:bg-yellow-500 transition-colors shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Address:</strong> 123 Eventora Street, City, Country
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Email:</strong> info@eventora.com
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Phone:</strong> +123 456 7890
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover:text-teal-500 dark:hover:text-yellow-400 transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="hover:text-teal-500 dark:hover:text-yellow-400 transition-colors"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="hover:text-teal-500 dark:hover:text-yellow-400 transition-colors"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
