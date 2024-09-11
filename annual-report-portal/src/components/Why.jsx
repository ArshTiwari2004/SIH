import React from 'react';

const WhyEduPulse = () => {
  return (
    <div className="py-20 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side: Detailed and appealing UI */}
        <div className="md:w-2/3 p-8 bg-white ">
          <h2 className="text-4xl text-center font-bold text-cyan-400 mb-6">Why Use EduPulse?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            EduPulse is revolutionizing the way educational institutions handle their reporting process by transforming data into insightful and interactive dashboards. Our platform not only integrates seamlessly with existing systems but also allows educational institutions to visualize academic, financial, and extracurricular data in ways that drive decision-making and growth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            By utilizing cutting-edge security measures and AI-powered data processing, EduPulse ensures accuracy, compliance, and collaboration. Whether it's streamlining annual report creation or empowering stakeholders with actionable insights, EduPulse provides an intuitive, user-friendly experience designed to elevate educational reporting to new heights. With our automated system, departments can focus less on manual work and more on strategic improvements.
          </p>

          {/* Features Highlight */}
          <div className="mt-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl text-blue-500 font-bold mr-4">✔</span>
                <span className="text-lg text-cyan-400">Seamless integration with existing databases and systems.</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl text-blue-500 font-bold mr-4">✔</span>
                <span className="text-lg text-cyan-400">Automated report generation with real-time data analysis.</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl text-blue-500 font-bold mr-4">✔</span>
                <span className="text-lg text-cyan-400">AI-driven data processing for accurate insights and trend identification.</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl text-blue-500 font-bold mr-4">✔</span>
                <span className="text-lg text-cyan-400">User-friendly interface designed for easy collaboration across departments.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side: GIF */}
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <img
            src="doc.gif" // Replace with your GIF link
            alt="Reporting GIF"
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default WhyEduPulse;
