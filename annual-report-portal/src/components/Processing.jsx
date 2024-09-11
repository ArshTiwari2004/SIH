import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { CheckCircleIcon, CloudUploadIcon } from '@heroicons/react/outline'; // Importing Heroicons

const ProcessingPage = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const navigate = useNavigate();

  // Simulate a delay for AI processing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessing(false);
    }, 9000); // 9-second delay to simulate processing

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        {isProcessing ? (
          <div>
            {/* Title and icon for processing */}
            <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <CloudUploadIcon className="h-8 w-8 mr-2 text-blue-500" />
              Processing Your Files with AI...
            </h1>
            {/* Description text */}
            <p className="mb-4 p-8 text-gray-600">
              We are currently analyzing and processing your uploaded files. Our system uses advanced AI technology to parse and structure the data, ensuring it's both accurate and ready for analysis.
              This process involves several steps, including scanning the contents of your files, extracting key information, and converting it into a format suitable for generating insights.
            </p>

            {/* PuffLoader Spinner */}
            <div className="flex justify-center">
              <PuffLoader color="#3B82F6" size={200} />
            </div>
          </div>
        ) : (
          <div>
            {/* Title and success icon */}
            <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
              <CheckCircleIcon className="h-8 w-8 mr-2 text-green-500" />
              Processing Complete!
            </h1>
            {/* Success message */}
            <p className="mb-4 text-gray-600">
              Your files have been successfully parsed. You can now view the results on the dashboard.
            </p>

            {/* Button to go to dashboard */}
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center  justify-center text-center justify-center"
              onClick={() => navigate('/dashboard-view')}
            >
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessingPage;

