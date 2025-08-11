"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { username, password });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="flex w-full max-w-4xl max-h-8/12 h-[600px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/*(Illustration) */}
        <div className="w-1/2 bg-sky-400 text-white p-10 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">Hello, Welcome!</h1>
          <p className="text-center mb-6">Dont have an account?</p>
          <button className=" text-white font-semibold py-2 px-6 rounded-2xl hover:bg-sky-500 border-white border-2 w-40">
            Register
          </button>
          <div className="mt-6">
            <Image
              src="/Mobile-encryption-amico-1.png"
              alt="Illustration"
              width={200}
              height={200}
              className="w-96 h-80"
            />
          </div>
        </div>
        {/* Right Section (Login Form) */}
        <div className="w-1/2 p-10 relative">
          <div className="absolute ml-12 pt-40">
            <Image
              src="/logo.png"
              alt="Security Icon"
              width={100}
              height={100}
              className="w-60 h-80 object-center opacity-40"
            />
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-custom bg-gray-300 p-2 opacity-70"
                  placeholder="Enter username"
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
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-custom bg-gray-300 p-2 opacity-70"
                  placeholder="Enter password"
                />
              </div>

              <div>
                <p className="text-center">Lupa Password??</p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .placeholder-custom::placeholder {
          color: #000000; 
          opacity: 1; 
        }
      `}</style>
    </div>
  );
}