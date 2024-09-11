import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const GetStartedSection = () => {
  const navigate = useNavigate();

  
  const handleGetStarted = () => {
    navigate('/signup');
  };

  
  const handleBookDemo = () => {
    navigate('/signup');
  };

  return (
    <div className="bg-blue-950 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Get Started for Free Today</h2>
        <p className="text-lg mb-8">
          Join millions of users who have shared that Fedena provides 99% of Customer Support Satisfaction.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGetStarted}
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-200 transition duration-300"
          >
            Get Started
          </button>
          <button
            onClick={handleBookDemo}
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
