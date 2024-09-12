import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-cyan-400 text-xl font-bold">Lumina</h1>
        <div className="flex items-center">
          <Link className="text-black mx-4" to="/">Home</Link>
          <Link className="text-black mx-4" to="/pricing">Pricing</Link>
          <a className="text-black mx-4" href="#integrations">Integrations</a>
          <a className="text-black mx-4" href="#about-section">About</a>
          <a className="text-black mx-4" href="#feasability">Feasability</a>
          <Link className="text-red-800 mx-4" to="/login">Sign In</Link>
          <Link className="bg-cyan-400 text-white px-4 py-2 rounded-md mx-4" to="/signup">Sign Up</Link>
          <Link className="border border-cyan-400 text-red-500 px-4 py-2 rounded-md mx-4" to="/try-free">Try for Free</Link>
          <Link className="bg-cyan-400 text-white px-4 py-2 mx-4" to="/signup">Request Live Demo</Link>
          <a href="tel:+1234567890" className="flex items-center text-black mx-4">
           <FaPhone className="mr-2" />
</a>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
