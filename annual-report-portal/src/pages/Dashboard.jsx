import React from "react";
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import '../utils/chartConfig'; // Adjust the path according to your project structure

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row items-center">
      {/* Left side content */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-4xl font-semibold mb-4">Transforming Data into a Comprehensive, Insightful Annual Report</h2>
        <p className="text-lg mb-8">Welcome to InsightEDU, where we transform your institute's achievements into a powerful, data-driven annual report. Simplify, analyze, and visualize the academic journey like never before.</p>

       {/* Get Started Button */}
        <Link 
       to="/signup" 
        className="bg-red-600 text-white py-2 px-4 rounded inline-block"
         >
         Get Started &gt;
           </Link>
</div>

      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 flex justify-center">
         <img 
         src="/reportgif.gif" 
         alt="Investment Animation"
          className="w-full h-auto max-w-md"
        />
      </div>


    </div>
  );
};

export default Dashboard;
