"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import Logout from "./auth/Logout";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const navLinks = ["Home", "Events", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wide hover:scale-105 transition-transform"
          >
            Eventora
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
              const isActive = pathname === href;

              return (
                <Link
                  key={link}
                  href={href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-teal-500 dark:text-yellow-400 font-bold underline"
                      : "hover:text-teal-500 dark:hover:text-yellow-400"
                  }`}
                >
                  {link}
                </Link>
              );
            })}

            {/* কেবলমাত্র login থাকলে Dashboard দেখাবে */}
            {status === "authenticated" && (
              <Link
                href="/dashboard"
                className={`transition-colors duration-200 ${
                  pathname === "/dashboard"
                    ? "text-teal-500 dark:text-yellow-400 font-bold underline"
                    : "hover:text-teal-500 dark:hover:text-yellow-400"
                }`}
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ModeToggle />

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {status === "authenticated" && (
              <div className="hidden lg:flex items-center gap-3">
                <span className="text-teal-400 text-sm font-medium">
                  {session.user.name}
                </span>
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border border-teal-400"
                />
                <Logout />
              </div>
            )}

            {status !== "authenticated" && (
              <>
                <Link
                  href="/login"
                  className="hidden md:inline-block bg-teal-500 dark:bg-yellow-400 text-white dark:text-gray-900 font-semibold px-4 py-2 rounded-full hover:bg-teal-600 dark:hover:bg-yellow-500 transition-colors shadow-md"
                >
                  Login
                </Link>
                <Link
                  href="/signUp"
                  className="hidden md:inline-block bg-teal-500 dark:bg-yellow-400 text-white dark:text-gray-900 font-semibold px-4 py-2 rounded-full hover:bg-teal-600 dark:hover:bg-yellow-500 transition-colors shadow-md"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-3 transition-colors duration-300">
          {navLinks.map((link) => {
            const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
            const isActive = pathname === href;

            return (
              <Link
                key={link}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block transition-colors duration-200 ${
                  isActive
                    ? "text-teal-500 dark:text-yellow-400 font-bold underline"
                    : "text-gray-900 dark:text-white hover:text-teal-500 dark:hover:text-yellow-400"
                }`}
              >
                {link}
              </Link>
            );
          })}

          {/* কেবলমাত্র login থাকলে Dashboard দেখাবে */}
          {status === "authenticated" && (
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className={`block transition-colors duration-200 ${
                pathname === "/dashboard"
                  ? "text-teal-500 dark:text-yellow-400 font-bold underline"
                  : "text-gray-900 dark:text-white hover:text-teal-500 dark:hover:text-yellow-400"
              }`}
            >
              Dashboard
            </Link>
          )}

          {status !== "authenticated" && (
            <>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block bg-teal-500 dark:bg-yellow-400 text-white dark:text-gray-900 font-semibold px-4 py-2 rounded-full hover:bg-teal-600 dark:hover:bg-yellow-500 transition-colors shadow-md"
              >
                Login
              </Link>
              <Link
                href="/signUp"
                onClick={() => setIsOpen(false)}
                className="block bg-teal-500 dark:bg-yellow-400 text-white dark:text-gray-900 font-semibold px-4 py-2 rounded-full hover:bg-teal-600 dark:hover:bg-yellow-500 transition-colors shadow-md"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
