"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { toast } from "sonner";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // handle register
  const handleRegister = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // collecting form data
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const image = formData.get("image");
      const number = formData.get("number");

      // sending to the backed
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          image,
          number,
        }),
      });

      if (res.status === 201) {
        toast.success("Registration successful");
        router.push("/login");
      }
    } catch (err) {
      const message = err.message;
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col md:flex-row">
        {/* Left side - Form */}
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              Create Account
            </h2>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  Photo URL
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="relative">
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="********"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-600 dark:text-gray-300"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  placeholder="+880 123 456 789"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* error */}
              {error && (
                <div className="text-xl text-red-500 text-center">{error}</div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-teal-500 dark:bg-yellow-400 text-white dark:text-gray-900 font-semibold py-2 rounded-lg hover:bg-teal-600 dark:hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? "submitting...." : "Register"}
              </button>
            </form>

            <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-teal-500 dark:text-yellow-400 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Right side - Content/Image */}
        <div className="md:w-1/2 hidden md:flex items-center justify-center bg-teal-600 dark:bg-gray-700 text-white p-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-4">Join Eventora Today!</h3>
            <p className="text-lg mb-6">
              Discover amazing events, connect with people, and manage your own
              events all in one place.
            </p>
            {/* <Image
              src="/signup-illustration.png"
              alt="Event Illustration"
              className="mx-auto w-3/4"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
