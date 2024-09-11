import React from 'react';
import TypingEffect from 'react-typing-effect';
import { FaLock, FaChartBar, FaFileAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">About EduPulse</h2>
        <TypingEffect
          text={['Turning Data into a Story of Success', 'Redefining Annual Reporting for Educational Excellence']}
          className="text-2xl font-semibold text-black-200"
        />
        <p className="mt-6 text-lg text-black-200 max-w-2xl mx-auto">
          EduPulse is a cutting-edge platform designed to streamline the process of preparing comprehensive annual reports for educational institutes. By integrating data from all departments, we help you transform raw information into visually compelling narratives.
        </p>

        {/* Feature Boxes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Box 1: Secure User Roles */}
          <div className="bg-cyan-400 shadow-lg rounded-lg p-6">
            <FaLock className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">User Authentication & Role Management</h3>
            <p className="text-gray-700">
              Secure login for different user roles, ensuring data privacy and role-based access control across departments.
            </p>
          </div>

          {/* Box 2: Data Visualization */}
          <div className="bg-cyan-400 shadow-lg rounded-lg p-6">
            <FaChartBar className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Analysis & Visualization</h3>
            <p className="text-gray-700">
              Visualize key performance indicators with customizable charts and dashboards for better insights and reporting.
            </p>
          </div>

          {/* Box 3: Report Generation */}
          <div className="bg-cyan-400 shadow-lg rounded-lg p-6">
            <FaFileAlt className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Automated Report Generation</h3>
            <p className="text-gray-700">
              Generate comprehensive annual reports in various formats, including PDF and HTML, with customizable templates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
