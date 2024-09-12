import React, { useState } from "react";
import { Line, Bar, Pie, Radar, Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Typography, Card, CardContent, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { FaMoneyBillWave, FaChartLine } from 'react-icons/fa';

// Generate Simulated Financial Data
const generateSimulatedFinancialData = () => {
  return {
    budgetAllocation: {
      labels: ['Research', 'Infrastructure', 'Salaries', 'Miscellaneous'],
      values: [500000, 800000, 300000, 200000],
    },
    expenditureBreakdown: {
      labels: ['2020', '2021', '2022', '2023'],
      values: [1200000, 1500000, 1700000, 1400000],
    },
    grantsReceived: {
      labels: ['Government Grants', 'Private Funding', 'Donations', 'Internal'],
      values: [600000, 300000, 100000, 200000],
    },
    financialPerformance: {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      values: [75, 85, 80, 90],
    },
    budgetVsSpending: {
      labels: ['Research', 'Infrastructure', 'Salaries', 'Miscellaneous'],
      datasets: [
        {
          label: 'Allocated Budget',
          data: [500000, 800000, 300000, 200000],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        },
        {
          label: 'Actual Spending',
          data: [480000, 750000, 290000, 190000],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ],
    },
    cashFlowScatter: {
      datasets: [{
        label: 'Cash Flow Performance',
        data: [
          { x: 1, y: 100000 },
          { x: 2, y: 200000 },
          { x: 3, y: 150000 },
          { x: 4, y: 300000 },
        ],
        backgroundColor: 'rgba(153, 102, 255, 0.4)',
        borderColor: 'rgba(153, 102, 255, 1)',
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
          label: 'Financial Data',
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
          label: 'Financial Data',
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
          backgroundColor: 'rgba(153,102,255,0.4)',
          borderColor: 'rgba(153,102,255,1)',
          borderWidth: 1
        }]
      };
    default:
      return {};
  }
};

function FinancialPerformance() {
  const [data] = useState(generateSimulatedFinancialData());

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Financial Performance Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-4">
          <Typography variant="h6">Budget Allocation</Typography>
          <Divider />
          <Bar data={generateChartData('bar', data.budgetAllocation)} options={{ responsive: true, indexAxis: 'x' }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Expenditure Breakdown</Typography>
          <Divider />
          <Line data={generateChartData('line', data.expenditureBreakdown)} options={{ responsive: true }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Grants Received</Typography>
          <Divider />
          <Pie data={generateChartData('pie', data.grantsReceived)} options={{ responsive: true }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Financial Performance by Quarter</Typography>
          <Divider />
          <Radar data={generateChartData('radar', data.financialPerformance)} options={{ responsive: true }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Budget vs. Actual Spending</Typography>
          <Divider />
          <Bar data={generateChartData('bar', data.budgetVsSpending)} options={{ responsive: true, indexAxis: 'x' }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Cash Flow Performance (Scatter)</Typography>
          <Divider />
          <Scatter data={generateChartData('scatter', data.cashFlowScatter)} options={{ responsive: true }} />
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Progress Towards Financial Goals</Typography>
          <Divider />
          <CircularProgressbar value={80} text={`${80}%`} />
          <Typography variant="body2">Achieved 80% of financial goals</Typography>
        </Card>
        <Card className="p-4">
          <Typography variant="h6">Insights and Key Conclusions</Typography>
          <Divider />
          <Typography variant="body1">
            <FaMoneyBillWave /> Total expenditure has been aligned with the allocated budget.
            <br />
            <FaChartLine /> Grants and external funding continue to be a vital part of the financial structure.
          </Typography>
        </Card>
      </div>

      <Box mt={4}>
        <Typography variant="h6">Detailed Financial Overview</Typography>
        <TableContainer component={Paper} className="mt-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Allocated Budget</TableCell>
                <TableCell>Actual Spending</TableCell>
                <TableCell>Remaining Budget</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.budgetAllocation.labels.map((label, index) => (
                <TableRow key={label}>
                  <TableCell>{label}</TableCell>
                  <TableCell>${data.budgetAllocation.values[index]}</TableCell>
                  <TableCell>${data.budgetVsSpending.datasets[1].data[index]}</TableCell>
                  <TableCell>${data.budgetAllocation.values[index] - data.budgetVsSpending.datasets[1].data[index]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default FinancialPerformance;