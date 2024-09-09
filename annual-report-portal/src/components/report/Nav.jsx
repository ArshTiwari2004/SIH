import React from "react";

function Navb() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-semibold">ANNUAL REPORT </div>
      <div className="text-white">
        <button className="mr-4">Notifications</button>
        <button className="mr-4">Profile</button>
        <button>Logout</button>
      </div>
    </nav>
  );
}

export default Navb;
