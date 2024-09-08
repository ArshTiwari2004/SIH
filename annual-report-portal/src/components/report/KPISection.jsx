import React from "react";

function KPISection({ kpis }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {kpis.map((kpi) => (
        <div className="bg-blue-100 p-4 rounded-lg shadow-md" key={kpi.title}>
          <h3 className="text-xl font-semibold">{kpi.value}</h3>
          <p className="text-gray-700">{kpi.title}</p>
        </div>
      ))}
    </div>
  );
}

export default KPISection;
