import React from "react";
import Sidebar from "../components/report/Sidebar";
import Navb from "../components/report/Nav";
import KPISection from "../components/report/KPISection";
import ChartCard from "../components/report/Chartcard";
import { useNavigate } from "react-router-dom"; // For navigation to PDF page

// Dummy KPI Data
const kpiData = [
  { title: "Number of Students Enrolled", value: "1500" },
  { title: "Programs Offered", value: "10" },
  { title: "NIRF Ranking", value: "150-200" },
  { title: "Students Placed", value: "85%" },
];

const DashboardView = () => {
  const navigate = useNavigate();

  const handleGeneratePDF = () => {
    navigate("/pdf"); // Redirect to pdf.jsx when the button is clicked
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navb />
        <main className="flex-grow p-6" style={{ marginTop: '-20px' }}> {/* Adjust margin to shift page upwards */}
          <KPISection kpis={kpiData} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center flex-col">
              <img src="./college.jpg" alt="College" className="w-full h-32 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold">Bhagwan Parshuram Institute of Technology</h2>
            </div>

            <ChartCard
              title="Students Placed"
              data={{
                labels: ["Placed", "Not Placed"],
                datasets: [
                  {
                    data: [85, 15],
                    backgroundColor: ["#36A2EB", "#FF6384"],
                  },
                ],
              }}
              type="pie"
            />

            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center flex-col">
              <h3 className="text-lg font-semibold mb-2">Number of Students Enrolled</h3>
              <p className="text-2xl font-bold">{kpiData.find(kpi => kpi.title === "Number of Students Enrolled")?.value}</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center flex-col">
              <h3 className="text-lg font-semibold mb-2">Programs Offered</h3>
              <p className="text-lg">M.Tech, MBA, BBA, B.Tech</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center flex-col">
              <h3 className="text-lg font-semibold mb-2">NIRF Ranking</h3>
              <p className="text-lg">{kpiData.find(kpi => kpi.title === "NIRF Ranking")?.value}</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center flex-col">
              <h3 className="text-lg font-semibold mb-2">Student Placement</h3>
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    className="text-gray-300"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="100, 100"
                    d="M18 2a16 16 0 0 1 0 32 16 16 0 0 1 0-32"
                  />
                  <path
                    className="text-blue-500"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="85, 100"
                    d="M18 2a16 16 0 0 1 0 32 16 16 0 0 1 0-32"
                  />
                  <text x="50%" y="50%" dy=".3em" textAnchor="middle" className="text-lg font-bold text-blue-500">85%</text>
                </svg>
              </div>
            </div>
          </div>
          {/* Generate PDF Button */}
          <button
            className="bg-red-500 text-center flex iten-center justify center text-white px-4 py-2 rounded mt-6"
            onClick={handleGeneratePDF}
          >
            Generate PDF
          </button>
        </main>
      </div>
    </div>
  );
};

export default DashboardView;