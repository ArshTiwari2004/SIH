import React from 'react';
import { FaDatabase, FaSyncAlt, FaCloudUploadAlt, FaLock } from 'react-icons/fa'; // Import relevant icons
import { useState } from 'react';

const IntegrationSystem = () => {
  const [integrations] = useState([
    { id: 1, title: "Database Integration", icon: <FaDatabase />, description: "Seamlessly integrates with your existing databases, including SQL and NoSQL systems." },
    { id: 2, title: "Real-time Sync", icon: <FaSyncAlt />, description: "Keep your data synchronized across departments and systems in real-time." },
    { id: 3, title: "Cloud Upload", icon: <FaCloudUploadAlt />, description: "Securely upload and store data on popular cloud platforms like AWS, GCP, and Azure." },
    { id: 4, title: "Data Security", icon: <FaLock />, description: "End-to-end encryption ensures that your sensitive data is protected at all times." }
  ]);

  return (
    <div className="py-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12">Various Integration Options to Enhance Institution's Productivity</h2>

        {/* Grid Layout for Integrations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
          {integrations.map((integration) => (
            <div key={integration.id} className="border border-cyan-400 p-6 item-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-blue-500 text-5xl mb-4">
                {integration.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{integration.title}</h3>
              <p className="text-gray-700">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationSystem;
