// Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import '../utils/chartConfig'; 

const Dashboard = () => {
  const data = {
    labels: ['Academic', 'Research', 'Financial', 'Infrastructure'],
    datasets: [
      {
        label: 'Metrics',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81],
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Annual Report Portal</h2>
      <p className="mb-8">This portal helps streamline the process of generating annual reports for educational institutes.</p>
      <div className="mb-8">
        <Bar data={data} />
      </div>
      <Link to="/reports" className="bg-blue-600 text-white py-2 px-4 rounded">View Reports</Link>
    </div>
  );
};

export default Dashboard;
