"use client";

import { login } from "@/app/actions";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // handle login
  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    const result = await signIn("credentials", {
      redirect: false, // don't redirect automatically
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
      toast.error(result.error);
    } else {
      toast.success("Login successful");
      // Force UI refresh by invalidating cache
      router.refresh(); // this re-fetches server components
      router.push("/"); // optional navigation
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900">
      {/* Left Side - Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Login to Eventora
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
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

            <button
              type="submit"
              className="w-full bg-teal-500 dark:bg-yellow-400 text-white dark:text-gray-900 font-semibold py-2 rounded-lg hover:bg-teal-600 dark:hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              href="/signUp"
              className="text-teal-500 dark:text-yellow-400 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Content/Image */}
      <div className="md:w-1/2 hidden md:flex items-center justify-center bg-teal-600 dark:bg-gray-700 text-white p-8">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-4">Welcome Back!</h3>
          <p className="text-lg mb-6">
            Login to manage your events, book tickets, and discover amazing
            experiences.
          </p>
          {/* <Image
            src="/login-illustration.png"
            alt="Login Illustration"
            className="mx-auto w-3/4"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
