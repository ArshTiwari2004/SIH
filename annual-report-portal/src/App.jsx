
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import SuperAdminUpload from "./components/Super";
import Work from "./components/Work";

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
            <Route path="/super" element={<SuperAdminUpload />} />
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
