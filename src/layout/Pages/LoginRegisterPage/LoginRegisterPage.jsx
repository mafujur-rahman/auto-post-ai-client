import React, { useState } from "react";

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full md:flex">
        {/* Left Section */}
        <div className="hidden md:flex items-center justify-center w-1/2 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white p-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg">Connect with people and access everything you need in one place.</p>
            <img
              src="/login-reg.-img.jpeg"
              alt="Welcome illustration"
              className="mt-6 rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Login" : "Register"}
          </h2>
          <form>
            {/* Username or Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
              />
            </div>
            {/* Confirm Password */}
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
                />
              </div>
            )}
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          {/* Toggle Login/Register */}
          <p className="text-center text-gray-600 mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              className="text-pink-600 hover:underline hover:text-pink-800 focus:outline-none"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
