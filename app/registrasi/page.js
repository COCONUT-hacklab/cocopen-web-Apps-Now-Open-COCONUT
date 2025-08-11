"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !username)) {
      setError("Please fill in all required fields");
      return;
    }
    setError("");
    console.log("Form submitted with:", { username, email, password, isLogin });
    // Add actual submission logic here (e.g., API call)
  };

  const handleFormSubmit = () => {
    // Handle form submission without <form> to avoid sandbox issues
    if (!email || !password || (!isLogin && !username)) {
      setError("Please fill in all required fields");
      return;
    }
    setError("");
    console.log("Form submitted with:", { username, email, password, isLogin });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl h-auto md:h-[600px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section (Login/Register Form) */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex items-center relative">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {isLogin ? "Login" : "Register"}
            </h2>
            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}
            <div className="space-y-4">
              {!isLogin && (
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100 p-2 placeholder-gray-500"
                    placeholder="Enter username"
                    aria-required="true"
                  />
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100 p-2 placeholder-gray-500"
                  placeholder="Enter email"
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100 p-2 placeholder-gray-500"
                  placeholder="Enter password"
                  aria-required="true"
                />
              </div>
              {isLogin && (
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline block text-center"
                >
                  Forgot Password?
                </a>
              )}
              <button
                onClick={handleFormSubmit}
                className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={isLogin ? "Login" : "Register"}
              >
                {isLogin ? "Login" : "Register"}
              </button>
              {!isLogin && (
                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                    aria-label="Social login"
                  >
                    <Image
                      src="/logo.png"
                      alt="Social login logo"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
            <Image
              src="/logo.png"
              alt="Background logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-sky-400 text-white p-6 md:p-10 flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Hello, Welcome!</h1>
          <p className="text-center mb-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white w-40"
            aria-label={isLogin ? "Switch to Register" : "Switch to Login"}
          >
            {isLogin ? "Register" : "Login"}
          </button>
          <div className="mt-6">
            <Image
              src="/private-data-amico-1.png"
              alt="Welcome illustration"
              width={300}
              height={300}
              className="object-contain w-64 md:w-96 h-64 md:h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}