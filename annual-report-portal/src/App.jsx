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
import SuperAdminUpload from "./components/Super";
import Work from "./components/Work";
import Sidebar from "./components/report/Sidebar";
import Navb from "./components/report/Nav"; 
import KPISection from "./components/report/KPISection"; 
import ChartCard from "./components/report/Chartcard"; 
import AdminPage from "./components/Adminpage";
import StudentPage from "./components/Studentpage";
import DashboardView from "./components/Dashboardview";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);




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
            <Route path="/super" element={<SuperAdminUpload />} />
            <Route path="/work" element={<Work />} />
            <Route path="/dashboard-view" element={<DashboardView />} />
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/studentpage" element={<StudentPage />} />
          </Routes>
        </main>
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

export default App;
