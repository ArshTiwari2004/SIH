import React from 'react';
import TypingEffect from 'react-typing-effect';

const About = () => {
  return (
  


    <section id="about" className="py-16 bg-blue-700 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">About InsightEDU</h2>
        <TypingEffect
          text={['Turning Data into a Story of Success', 'Redefining Annual Reporting for Educational Excellence']}
          className="text-2xl font-semibold text-gray-700"
        />
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          InsightEDU is a cutting-edge platform designed to streamline the process of preparing comprehensive annual reports for educational institutes. By integrating data from all departments, we help you transform raw information into visually compelling narratives.
        </p>
      </div>
    
    </section>


  );
};

export default About;
