import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Login from "./pages/LoginPage";
import PatientMedicalForm from "./components/PatientMedicalForm";
import Signup from "./pages/SignupPage";
import DoctorContactForm from "./components/Contact";
import About from "./components/About";
import PatientInfoCard from "./components/PatientInfoCard";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patientDetails" element={<PatientMedicalForm />} />
        <Route path="/patientInfo" element={<PatientInfoCard/>} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/forgotPassword" element={<ForgotPassword />} />

        {/* Optional pages */}
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<DoctorContactForm/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
