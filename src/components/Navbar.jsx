import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white text-2xl font-bold">
          HealthCare
        </h1>

        <ul className="flex gap-8 text-white">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
            Contact
          </NavLink>
        </ul>

        <NavLink
          to="/login"
          className="bg-white text-indigo-600 px-4 py-2 rounded-xl font-semibold"
        >
          Login
        </NavLink>

        <NavLink
          to="/patientDetails"
          className="bg-white text-indigo-600 px-4 py-2 rounded-xl font-semibold"
        >
          PatientDetails
        </NavLink>

        <NavLink
          to="/patientInfo"
          className="bg-white text-indigo-600 px-4 py-2 rounded-xl font-semibold"
        >
          PatientInfo
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
