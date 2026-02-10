import React, { useState } from "react";

const DoctorContactForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Contact Data:", formData);
    alert("Your message has been sent to the doctor");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Contact Doctor
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Describe your problem in detail"
            rows="5"
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Send to Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorContactForm;
