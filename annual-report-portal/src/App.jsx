import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import AcademicPerformance from "./pages/AcademicPerformance";
import ResearchPublications from "./pages/ResearchPublications";
import FinancialOverview from "./pages/FinancialOverview";
import StudentLife from "./pages/StudentLife";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";

import Home from "./components/Work";
import SuperAdminInfo from "./components/Role-based-signup-details/SuperAdminInfo";
import StudentInfo from "./components/Role-based-signup-details/StudentInfo";
import FacultyInfo from "./components/Role-based-signup-details/FacultyInfo";
import AdminInfo from "./components/Role-based-signup-details/AdminInfo";

import SuperAdminUpload from "./components/Super";
import Work from "./components/Work";
import Sidebar from "./components/report/Sidebar";
import Navb from "./components/report/Nav"; 
import KPISection from "./components/report/KPISection"; 
import ChartCard from "./components/report/Chartcard"; 
import AdminPage from "./components/Adminpage";
import StudentPage from "./components/Studentpage";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);



const kpiData = [
  { title: "Number of Students Enrolled", value: "1500" },
  { title: "Programs Offered", value: "10" },
  { title: "NIRF Ranking", value: "150-200" },
  { title: "Students Placed", value: "85%" },
];


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16 pb-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/academic-performance" element={<AcademicPerformance />} />
            <Route path="/research-publications" element={<ResearchPublications />} />
            <Route path="/financial-overview" element={<FinancialOverview />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/super-admin-info" element={<SuperAdminInfo />} />
            <Route path="/admin-info" element={<AdminInfo />} />
            <Route path="/student-info" element={<StudentInfo />} />
            <Route path="/faculty-info" element={<FacultyInfo />} />

            <Route path="/super" element={<SuperAdminUpload />} />

            <Route path="/work" element={<Work />} />
            <Route path="/dashboard-view" element={<DashboardView />} />
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/studentpage" element={<StudentPage />} />
          </Routes>
        </main>


          </Routes>
        </main>
        {/* <Home/> */}
        <Work/>
        <Footer />
      </div>
    </Router>
  );
};

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Dashboard />
      <About />
    </div>
  );
};


const DashboardView = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navb />
        <main className="flex-grow p-6">
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
        </main>
      </div>
    </div>
  );
};

export default App;


