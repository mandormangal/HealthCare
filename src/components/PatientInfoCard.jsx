import React from "react";

const PatientInfoCard = () => {
  // Dummy data (later replace with API response)
  const patient = {
    name: "Rahul Sharma",
    age: 32,
    gender: "Male",
    height: "172 cm",
    weight: "70 kg",
    symptoms: "Fever, headache, body pain",
    medicines: "Paracetamol, Vitamin C",
  };

  return (
    <div className="bg-white max-w-xl mx-auto p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-indigo-600 mb-4">
        Patient Details
      </h3>

      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Name:</span> {patient.name}</p>
        <p><span className="font-semibold">Age:</span> {patient.age}</p>
        <p><span className="font-semibold">Gender:</span> {patient.gender}</p>
        <p><span className="font-semibold">Height:</span> {patient.height}</p>
        <p><span className="font-semibold">Weight:</span> {patient.weight}</p>
        <p>
          <span className="font-semibold">Symptoms:</span>{" "}
          {patient.symptoms}
        </p>
        <p>
          <span className="font-semibold">Medicines:</span>{" "}
          {patient.medicines}
        </p>
      </div>
    </div>
  );
};

export default PatientInfoCard;
