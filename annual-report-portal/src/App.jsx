import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navb from "./components/report/Nav";
import { academicPerformanceData, researchData, studentLifeData } from "./data/dummyData";
import KPISection from "./components/report/KPISection";
import Footer from "./components/Footer";
import Sidebar from "./components/report/Sidebar";
import Dashboard from "./pages/Dashboard";
import AcademicPerformance from "./pages/Academicperformance";
import ResearchPublications from "./pages/ResearchPublications";
import FinancialOverview from "./pages/FinancialOverview";
import StudentLife from "./pages/StudentLife";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import SuperAdminUpload from "./components/Super";
import Work from "./components/Work";
import ChartCard from "./components/report/Chartcard";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-1 pt-16 pb-8"> {/* Padding for header and footer */}
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
            </Routes>
          </main>
        </div>
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

