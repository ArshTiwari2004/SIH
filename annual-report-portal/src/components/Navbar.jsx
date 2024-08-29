import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Annual Report Portal</h1>
        <div>
          <Link className="text-white mx-2" to="/">Dashboard</Link>
          <Link className="text-white mx-2" to="/reports">Reports</Link>
          <Link className="text-white mx-2" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
