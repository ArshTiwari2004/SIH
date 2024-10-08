import React from "react";
import { Link } from "react-router-dom";


import { Bar } from 'react-chartjs-2';
import '../utils/chartConfig';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center pt-0 -mt-20 ">
      
      {/* Left side content */}
      <div className="lg:w-1/2 text-left">
        {/* All-in-one red background text */}
        <div className="bg-cyan-400 text-white text-sm py-2 px-4 inline-block rounded mb-2">
          All-in-one
        </div>
        
        {/* Main Heading */}
        <h2 className="text-5xl font-semibold mb-6">
          Transforming Data into a Comprehensive, Insightful Annual Report
        </h2>
        
        {/* Description Text */}
        <p className="text-xl mb-10">
          Welcome to Lumina, where we transform your institute's achievements into a powerful, data-driven annual report. Simplify, analyze, and visualize the academic journey like never before.
        </p>
        
        {/* Buttons */}
        <div className="flex space-x-4">
          {/* Get Started Button */}
          <Link 
            to="/signup" 
            className="bg-cyan-400 text-white py-3 px-6 rounded inline-block text-lg"
          >
            Get Started &gt;
          </Link>

          {/* Pricing and Plans Button */}
          <Link 
            to="/pricing" 
            className="bg-cyan-400 text-white py-3 px-6 rounded inline-block text-lg"
          >
            Pricing and Plans
          </Link>
        </div>
      </div>
      
      {/* Right side GIF */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 flex justify-center">
        <img 
          src="/reportgif.gif" 
          alt="Report GIF" 
          className="w-full h-auto max-w-xl" /> 
      </div>
    </div>
  );
};

export default Dashboard;
