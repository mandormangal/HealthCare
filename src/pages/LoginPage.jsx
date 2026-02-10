import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleForgotPassword = ()=>{
    navigate('/forgotPassword')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <div className="text-right">
           
              <span className="text-indigo-600 text-sm cursor-pointer hover:underline" onClick={handleForgotPassword}>
                Forgot Password?
              </span>
        
          </div>

          <button className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to='/signup'><span className="text-indigo-600 cursor-pointer">Sign Up</span> </Link >
        </p>
      </div>
    </div>
  );
};

export default Login;
