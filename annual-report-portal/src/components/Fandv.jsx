import React from 'react';
import { FaShieldAlt, FaUsers, FaServer, FaCog ,FaExpand,FaTools } from 'react-icons/fa'; // Icons

const FeasibilityAndViability = () => {
  return (
    <div className="bg-white py-16 text-center" id='feasability'  >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl  font-semibold mb-12">Feasibility and Viability of our Software </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-sky-200 p-8 rounded-lg shadow-lg border border-indigo-950">
            <FaShieldAlt className="text-blue-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Robust</h3>
            <p className="text-gray-700">Built to handle large volumes of data with ease and reliability.</p>
          </div>
          <div className="bg-sky-200 p-8 rounded-lg shadow-lg border border-indigo-950">
            <FaUsers className="text-green-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
            <p className="text-gray-700">Designed with an intuitive interface to ensure ease of use for all users.</p>
          </div>
          <div className="bg-sky-200 p-8 rounded-lg shadow-lg border border-indigo-950">
            <FaServer className="text-orange-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-gray-700">Features advanced security measures to protect sensitive data.</p>
          </div>
          <div className="bg-sky-200 p-8 rounded-lg shadow-lg border border-indigo-950">
          <FaExpand className="text-blue-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Scalable</h3>
            <p className="text-gray-700">Easily adapts to growing data needs and organizational requirements.</p>
          </div>
          <div className="bg-sky-200 p-8 rounded-lg shadow-lg border border-indigo-950 ">
            <FaCog className="text-red-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Flexible</h3>
            <p className="text-gray-700">Offers customizable features to fit diverse reporting needs.</p>
          </div>
          <div className="bg-sky-200 p-8 rounded-lg shadow-lg border border-indigo-950 ">
            <FaTools className="text-teal-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Efficient</h3>
            <p className="text-gray-700">Optimized for maximum performance and minimal resource usage.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeasibilityAndViability;
