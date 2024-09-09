import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen p-4">
      <div className="text-xl font-semibold mb-6">Navigation</div>
      <ul className="space-y-2">
        <li className="hover:bg-gray-700 rounded-md">
          <Link 
            to="/" 
            className="block p-3 transition-all duration-300"
          >
            <span className="border-b border-gray-600 block pb-2">Dashboard</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <Link 
            to="/academic-performance" 
            className="block p-3 transition-all duration-300"
          >
            <span className="border-b border-gray-600 block pb-2">Academic Performance</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <Link 
            to="/research-publications" 
            className="block p-3 transition-all duration-300"
          >
            <span className="border-b border-gray-600 block pb-2">Research & Publications</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <Link 
            to="/financial-overview" 
            className="block p-3 transition-all duration-300"
          >
            <span className="border-b border-gray-600 block pb-2">Financial Overview</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <Link 
            to="/student-life" 
            className="block p-3 transition-all duration-300"
          >
            <span className="border-b border-gray-600 block pb-2">Student Life</span>
          </Link>
        </li>
        <li className="mt-6 border-t border-gray-600 pt-4">
          <div className="text-lg font-semibold mb-2">Additional Links</div>
          <ul className="space-y-2">
            <li className="hover:bg-gray-700 rounded-md">
              <Link 
                to="/new-feature" 
                className="block p-3 transition-all duration-300"
              >
                <span className="border-b border-gray-600 block pb-2">New Feature</span>
              </Link>
            </li>
            <li className="hover:bg-gray-700 rounded-md">
              <Link 
                to="/settings" 
                className="block p-3 transition-all duration-300"
              >
                <span className="border-b border-gray-600 block pb-2">Settings</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
