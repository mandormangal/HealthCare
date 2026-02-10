import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-purple-50">

      <div className="text-center max-w-2xl px-6">

        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-indigo-600">MyBrand</span>
        </h1>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Build modern, fast, and beautiful web applications using the latest
          technologies. Start your journey today and create something amazing.
        </p>

        <div className="flex justify-center gap-4">
          <NavLink to='/signup' >
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition">
              Get Started
            </button>
          </NavLink>

          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition">
            Learn More
          </button>
        </div>

      </div>

    </div>
  );
};

export default Home;
