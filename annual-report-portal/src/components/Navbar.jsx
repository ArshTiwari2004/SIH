import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-xl font-bold">InsightEdU</h1>
        <div>
          <Link className="text-black mx-8" to="/">Home</Link>
          <Link className="text-red-800 mx-8" to="/login">Sign In</Link>
          <Link className="bg-red-500 text-white px-4 py-2 rounded-md mx-6" to="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
