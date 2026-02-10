import React from "react";

const ForgotPassword = () => {
  const userEmail = "user@example.com";

  const handleSendOtp = () => {
    console.log("OTP sent to:", userEmail);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-80">
        <h2 className="text-xl font-semibold text-center mb-4">
          Forgot Password
        </h2>

        <input
          type="email"
          value={userEmail}
          disabled
          className="w-full p-2 mb-4 border rounded-lg bg-gray-200 cursor-not-allowed"
        />

       <button
  onClick={handleSendOtp}
  className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium cursor-pointer"
>
  Send OTP
</button>

      </div>
    </div>
  );
};

export default ForgotPassword;
