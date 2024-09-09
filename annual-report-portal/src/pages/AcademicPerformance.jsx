import React from "react";
import ChartCard from "../components/report/Chartcard";
import { academicPerformanceData } from "../data/dummyData";

function AcademicPerformance() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Academic Performance</h1>
      <div className="grid grid-cols-2 gap-4">
        <ChartCard title="Pass Rates by Department" data={academicPerformanceData} />
        {/* Add more charts as needed */}
      </div>
    </div>
  );
}

export default AcademicPerformance;
