"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Info */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">Eventora</h1>
          <p className="text-sm">
            © {new Date().getFullYear()} Eventora. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4">
          {["Home", "Events", "About", "Contact"].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              className="hover:text-teal-500 dark:hover:text-yellow-400 transition-colors duration-200"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Social Media / Contact */}
        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-teal-500 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-teal-500 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-teal-500 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
