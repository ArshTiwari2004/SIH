import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen p-4">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/academic-performance">Academic Performance</Link></li>
        <li><Link to="/research-publications">Research & Publications</Link></li>
        <li><Link to="/financial-overview">Financial Overview</Link></li>
        <li><Link to="/student-life">Student Life</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
