import React from "react";
import { Bar, Pie } from "react-chartjs-2";

function ChartCard({ title, data, type = "bar" }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {type === "bar" ? <Bar data={data} /> : <Pie data={data} />}
    </div>
  );
}

export default ChartCard;