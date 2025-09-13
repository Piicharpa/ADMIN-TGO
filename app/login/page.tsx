'use client';

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("Please fill in both fields.");
      return;
    }

    if (email === "test@example.com" && password === "password123") {
      setMessage("Sign in successful!");
      
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-green-200 via-blue-100 to-blue-200">
      {/* Left Side */}
      <div className="hidden md:flex md:w-1/2 flex-col justify-center items-center text-center p-16 bg-gradient-to-br from-green-400 to-blue-500 text-white">
        <img
          src="img/Contact us-rafiki.png"
          alt="Illustration"
          className="w-3/4 max-w-md mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">
          CBAM and CFP Admin Platform
        </h1>
        <p className="text-lg font-light max-w-md">
          แพลตฟอร์มสำหรับผู้ดูแลระบบเพื่อจัดการและคำนวณค่าคาร์บอนของผลิตภัณฑ์
        </p>
      </div>

      {/* Right Side */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-10">
        <div className="w-full max-w-md bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/30">
          <div className="flex justify-center mb-6">
            <img
              src="/img/Logo.png"
              alt="Logo"
              className="h-20 object-contain"
            />
          </div>

          <form onSubmit={handleOnSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                อีเมล์
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-400 outline-none transition duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                รหัสผ่าน
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-400 outline-none transition duration-200 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            {message && (
              <p
                className={`text-center text-sm font-medium ${
                  message.includes("successful")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition duration-200 shadow-md"
            >
              Sign In
            </button>

            <p className="text-center text-xs text-gray-500 mt-2">
              Don’t have an account?{" "}
              <span className="text-blue-600 font-semibold cursor-pointer">
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
