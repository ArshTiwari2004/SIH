import React from 'react';
import { FaTrophy, FaStar, FaRocket } from 'react-icons/fa'; // Icons

const BragAboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8">
          <h2 className="text-4xl font-bold mb-4">Creating a Difference in Education</h2>
          <p className="text-lg mb-6">
            At EduPulse, we are dedicated to transforming the way educational institutions handle their annual reporting. Our innovative platform not only simplifies the process but also enhances the quality of reports with insightful data analysis and visually appealing presentations.
          </p>
          <p className="text-lg mb-6">
            Our commitment to excellence and customer satisfaction drives us to continuously improve and adapt our solutions to meet the evolving needs of our users. Join the revolution in educational reporting and experience the difference with EduPulse.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <div className="flex flex-col items-center">
              <FaTrophy className="text-blue-500 text-4xl mb-2" />
              <p className="font-semibold">Award-Winning</p>
              <p className="text-gray-700">Recognized for excellence in educational technology.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaStar className="text-yellow-400 text-4xl mb-2" />
              <p className="font-semibold">Top Rated</p>
              <p className="text-gray-700">Rated highly by users for its functionality and ease of use.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaRocket className="text-red-500 text-4xl mb-2" />
              <p className="font-semibold">Innovative</p>
              <p className="text-gray-700">Pioneering new features and enhancements in educational reporting.</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <img src="rep.png" alt="EduPulse" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default BragAboutUs;
