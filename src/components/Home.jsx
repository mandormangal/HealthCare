import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661764196515-85682653314d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ')",
      }}
    >
      {/* Dark background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative text-center max-w-2xl px-6 bg-white/70 backdrop-blur-md p-8 rounded-2xl">

        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-indigo-600">HealthCare</span>
        </h1>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Live better by caring for your health and your mindset. Build daily habits that energize your body, calm your mind, and support a meaningful life.
        </p>

        {/* Health related image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966484.png"
          alt="health illustration"
          className="w-40 mx-auto mb-6"
        />

        <div className="flex justify-center gap-4">
          <NavLink to="/signup">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition">
              Get Started
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Home;

