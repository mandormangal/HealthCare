import React, { useState } from "react";

const PatientMedicalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    symptoms: "",
    medicines: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Medical information submitted");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Patient Medical Info
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <div className="grid grid-cols-2 gap-4">
            <input name="age" placeholder="Age" onChange={handleChange} className="border p-3 rounded-lg" />
            <input name="gender" placeholder="Gender" onChange={handleChange} className="border p-3 rounded-lg" />
            <input name="height" placeholder="Height (cm)" onChange={handleChange} className="border p-3 rounded-lg" />
            <input name="weight" placeholder="Weight (kg)" onChange={handleChange} className="border p-3 rounded-lg" />
          </div>

          <textarea
            name="symptoms"
            placeholder="Symptoms"
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <textarea
            name="medicines"
            placeholder="Current Medicines"
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientMedicalForm;
