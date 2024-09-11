import React from "react";
import { Bar, Pie } from "react-chartjs-2";

// Default structure for data to avoid errors
const defaultData = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
      backgroundColor: [],
    },
  ],
};

function ChartCard({ title, data = defaultData, type = "bar" }) {
  // Ensure that data has labels and datasets to prevent errors
  const isValidData =
    data &&
    Array.isArray(data.labels) &&
    Array.isArray(data.datasets) &&
    data.datasets.length > 0;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {isValidData ? (
        type === "bar" ? <Bar data={data} /> : <Pie data={data} />
      ) : (
        <p>No valid data available</p>
      )}
    </div>
  );
}

export default ChartCard;
