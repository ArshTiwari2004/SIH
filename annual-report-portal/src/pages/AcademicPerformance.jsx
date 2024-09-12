import React, { useState } from "react";
import { Line, Bar, Pie, Radar, Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';  
import { FaTachometerAlt, FaChartLine } from 'react-icons/fa';

// Generate Simulated Data
const generateSimulatedData = () => {
  return {
    passRatesByDepartment: {
      labels: ['Math', 'Science', 'History', 'English'],
      values: [85, 90, 78, 88],
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

// Generate Chart Data
const generateChartData = (chartType, data) => {
  if (!data) {
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
  const [data] = useState(generateSimulatedData());

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Report of Academic Performance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-4">
          <Typography variant="h6">Pass Rates by Department</Typography>
          <Divider />
          <Line data={generateChartData('line', data.passRatesByDepartment)} options={{ responsive: true }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Student Enrollment</Typography>
          <Divider />
          <Bar data={generateChartData('bar', data.studentEnrollment)} options={{ responsive: true, indexAxis: 'x' }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Faculty Achievements</Typography>
          <Divider />
          <Pie data={generateChartData('pie', data.facultyAchievements)} options={{ responsive: true }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Student Performance</Typography>
          <Divider />
          <Radar data={generateChartData('radar', data.studentPerformance)} options={{ responsive: true }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Department Comparison</Typography>
          <Divider />
          <Bar data={generateChartData('bar', data.departmentComparison)} options={{ responsive: true, indexAxis: 'x' }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Student Performance (Scatter)</Typography>
          <Divider />
          <Scatter data={generateChartData('scatter', data.studentPerformanceScatter)} options={{ responsive: true }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Progress</Typography>
          <Divider />
          <CircularProgressbar value={75} text={`${75}%`} />
          <Typography variant="body2">Progress toward academic goals</Typography>
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Insights and Conclusions</Typography>
          <Divider />
          <Typography variant="body1">
            <FaTachometerAlt /> Overall, the data shows a positive trend in student performance and enrollment. 
            <br />
            <FaChartLine /> Notable achievements in research and awards have contributed to higher faculty satisfaction.
          </Typography>
        </Card>
      </div>
    </div>
  );
}

export default AcademicPerformance;
