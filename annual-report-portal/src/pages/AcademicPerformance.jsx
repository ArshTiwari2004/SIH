import React, { useState } from "react";
import { Line, Bar, Pie, Radar, Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartCard from "../components/report/Chartcard";


const generateSimulatedData = () => {
  return {
    passRatesByDepartment: {
      labels: ['Math', 'Science', 'History', 'English'], // Ensure labels are set
      values: [85, 90, 78, 88], // Ensure values are set
    },
    studentEnrollment: {
      labels: ['2020', '2021', '2022', '2023'],
      values: [1200, 1500, 1600, 1400],
    },
    facultyAchievements: {
      labels: ['Research', 'Awards', 'Publications', 'Grants'],
      values: [25, 15, 30, 10],
    },
    studentPerformance: {
      labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
      values: [75, 85, 80, 90],
    },
    departmentComparison: {
      labels: ['Math', 'Science', 'History', 'English'],
      datasets: [
        {
          label: '2023',
          data: [85, 90, 78, 88],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: '2022',
          data: [80, 85, 75, 82],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ],
    },
    studentPerformanceScatter: {
      datasets: [{
        label: 'Student Performance',
        data: [
          { x: 1, y: 75 },
          { x: 2, y: 85 },
          { x: 3, y: 80 },
          { x: 4, y: 90 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    }
  };
};



const generateChartData = (chartType, data) => {
  if (!data) {
    // Fallback for undefined or empty data
    return {
      labels: [],
      datasets: [{
        label: 'No Data Available',
        data: [],
        backgroundColor: 'rgba(200, 200, 200, 0.4)',
        borderColor: 'rgba(200, 200, 200, 1)',
        borderWidth: 1
      }]
    };
  }
  
  switch (chartType) {
    case 'line':
      return {
        labels: data.labels || [], 
        datasets: [{
          label: 'Performance Data',
          data: data.values || [],
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
          fill: true
        }]
      };
    case 'bar':
      return {
        labels: data.labels || [],
        datasets: [{
          label: 'Department Data',
          data: data.values || [],
          backgroundColor: 'rgba(153,102,255,0.2)',
          borderColor: 'rgba(153,102,255,1)',
          borderWidth: 1
        }]
      };
    case 'pie':
      return {
        labels: data.labels || [],
        datasets: [{
          data: data.values || [],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED']
        }]
      };
    case 'radar':
      return {
        labels: data.labels || [],
        datasets: [{
          label: 'Radar Chart',
          data: data.values || [],
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)'
        }]
      };
    case 'scatter':
      return {
        datasets: [{
          label: 'Scatter Chart',
          data: data.datasets ? data.datasets[0].data : [],
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1
        }]
      };
    default:
      return {};
  }
};


function AcademicPerformance() {
  const [data, setData] = useState(generateSimulatedData());

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Academic Performance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ChartCard title="Pass Rates by Department">
          <Line data={generateChartData('line', data.passRatesByDepartment)} options={{ responsive: true }} />
        </ChartCard>
        <ChartCard title="Student Enrollment">
          <Bar data={generateChartData('bar', data.studentEnrollment)} options={{ responsive: true, indexAxis: 'x' }} />
        </ChartCard>
        <ChartCard title="Faculty Achievements">
          <Pie data={generateChartData('pie', data.facultyAchievements)} options={{ responsive: true }} />
        </ChartCard>
        <ChartCard title="Student Performance">
          <Radar data={generateChartData('radar', data.studentPerformance)} options={{ responsive: true }} />
        </ChartCard>
        <ChartCard title="Department Comparison">
          <Bar data={generateChartData('bar', data.departmentComparison)} options={{ responsive: true, indexAxis: 'x' }} />
        </ChartCard>
        <ChartCard title="Student Performance (Scatter)">
          <Scatter data={generateChartData('scatter', data.studentPerformanceScatter)} options={{ responsive: true }} />
        </ChartCard>
      </div>
    </div>
  );
}

export default AcademicPerformance;
