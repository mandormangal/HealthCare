import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-4xl bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">
          Doctor – Patient Relationship
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          The doctor–patient relationship is built on trust, communication, and
          mutual respect. Patients rely on doctors for accurate diagnosis,
          effective treatment, and compassionate care, while doctors depend on
          patients to share honest and complete medical information.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          A strong relationship ensures better understanding of medical
          conditions, improved treatment outcomes, and a comfortable environment
          where patients feel safe discussing their health concerns openly.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          Our platform aims to strengthen this connection by enabling patients
          to share their medical details securely and allowing doctors to review
          them efficiently for better healthcare decisions.
        </p>
      </div>
    </div>
  );
};

export default About;
