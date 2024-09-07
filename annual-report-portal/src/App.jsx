import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import Home from "./components/Work";
import SuperAdminInfo from "./components/Role-based-signup-details/SuperAdminInfo";
import StudentInfo from "./components/Role-based-signup-details/StudentInfo";
import FacultyInfo from "./components/Role-based-signup-details/FacultyInfo";
import AdminInfo from "./components/Role-based-signup-details/AdminInfo";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16 pb-8"> {/* Added padding for header and footer */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/super-admin-info" element={<SuperAdminInfo />} />
            <Route path="/admin-info" element={<AdminInfo />} />
            <Route path="/student-info" element={<StudentInfo />} />
            <Route path="/faculty-info" element={<FacultyInfo />} />
          </Routes>
        </main>
        <Home/>
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
