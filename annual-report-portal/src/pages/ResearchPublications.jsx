import React, { useState } from "react";
import { Line, Bar, Doughnut, PolarArea, Bubble } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Typography, Card, CardContent, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { FaClipboardList, FaPoll } from "react-icons/fa";

// Generate Simulated Data
const generateSimulatedResearchData = () => {
  return {
    papersPublished: {
      labels: ["2020", "2021", "2022", "2023"],
      values: [50, 75, 100, 120],
    },
    studentParticipation: {
      labels: ["2020", "2021", "2022", "2023"],
      values: [200, 250, 300, 350],
    },
    facultyInvolvement: {
      labels: ["2020", "2021", "2022", "2023"],
      values: [30, 35, 40, 50],
    },
    paperRecognition: {
      labels: ["2020", "2021", "2022", "2023"],
      values: [10, 15, 18, 25],
    },
    departmentBreakdown: {
      labels: ["Science", "Engineering", "Humanities", "Commerce"],
      values: [45, 55, 30, 40],
    },
    researchProgress: 80, // Percent
  };
};

// Generate Chart Data
const generateChartData = (chartType, data) => {
  switch (chartType) {
    case "line":
      return {
        labels: data.labels || [],
        datasets: [
          {
            label: "Data",
            data: data.values || [],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            fill: true,
          },
        ],
      };
    case "bar":
      return {
        labels: data.labels || [],
        datasets: [
          {
            label: "Data",
            data: data.values || [],
            backgroundColor: "rgba(153,102,255,0.2)",
            borderColor: "rgba(153,102,255,1)",
            borderWidth: 1,
          },
        ],
      };
    case "doughnut":
      return {
        labels: data.labels || [],
        datasets: [
          {
            data: data.values || [],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
          },
        ],
      };
    case "polar":
      return {
        labels: data.labels || [],
        datasets: [
          {
            data: data.values || [],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
          },
        ],
      };
    case "bubble":
      return {
        datasets: [
          {
            label: "Bubble Dataset",
            data: [
              { x: 1, y: 10, r: 5 },
              { x: 2, y: 20, r: 10 },
              { x: 3, y: 30, r: 15 },
              { x: 4, y: 40, r: 20 },
            ],
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
          },
        ],
      };
    default:
      return {};
  }
};

// Create Table Data
const createTableData = () => {
  return [
    { year: "2020", papersSubmitted: 50, papersRecognized: 10, facultyInvolved: 30 },
    { year: "2021", papersSubmitted: 75, papersRecognized: 15, facultyInvolved: 35 },
    { year: "2022", papersSubmitted: 100, papersRecognized: 18, facultyInvolved: 40 },
    { year: "2023", papersSubmitted: 120, papersRecognized: 25, facultyInvolved: 50 },
  ];
};

function ResearchAndPublications() {
  const [data] = useState(generateSimulatedResearchData());
  const tableData = createTableData();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Research and Publications Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Papers Published Line Chart */}
        <Card className="p-4">
          <Typography variant="h6">Papers Published Over the Years</Typography>
          <Divider />
          <Line data={generateChartData("line", data.papersPublished)} options={{ responsive: true }} />
        </Card>

        {/* Student Participation Bar Chart */}
        <Card className="p-4">
          <Typography variant="h6">Student Participation in Research</Typography>
          <Divider />
          <Bar data={generateChartData("bar", data.studentParticipation)} options={{ responsive: true }} />
        </Card>

        {/* Faculty Involvement Doughnut Chart */}
        <Card className="p-4">
          <Typography variant="h6">Faculty Involvement</Typography>
          <Divider />
          <Doughnut data={generateChartData("doughnut", data.facultyInvolvement)} options={{ responsive: true }} />
        </Card>

        {/* Paper Recognition Polar Area Chart */}
        <Card className="p-4">
          <Typography variant="h6">Paper Recognitions</Typography>
          <Divider />
          <PolarArea data={generateChartData("polar", data.paperRecognition)} options={{ responsive: true }} />
        </Card>

        {/* Department Breakdown Bubble Chart */}
        <Card className="p-4">
          <Typography variant="h6">Research Papers by Department</Typography>
          <Divider />
          <Bubble data={generateChartData("bubble", data.departmentBreakdown)} options={{ responsive: true }} />
        </Card>

        {/* Research Progress Meter */}
        <Card className="p-4">
          <Typography variant="h6">Research Progress</Typography>
          <Divider />
          <CircularProgressbar value={data.researchProgress} text={`${data.researchProgress}%`} />
          <Typography variant="body2" className="mt-2">Progress toward annual research goals.</Typography>
        </Card>

        {/* Insights Section */}
        <Card className="p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <Typography variant="h6">Key Insights and Conclusion</Typography>
          <Divider />
          <Box className="mt-4">
            <Typography variant="body1">
              <FaClipboardList /> In 2023, we saw a notable increase in paper submissions, with over 120 papers submitted compared to 100 in 2022.
              <br />
              <FaPoll /> Student participation continues to grow, with over 350 students engaged in research activities, a 20% increase from the previous year.
            </Typography>
          </Box>
        </Card>

        {/* Table: Research Overview */}
        <Card className="p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <Typography variant="h6">Research Overview (2020-2023)</Typography>
          <Divider />
          <TableContainer component={Paper} className="mt-4">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Year</TableCell>
                  <TableCell>Papers Submitted</TableCell>
                  <TableCell>Papers Recognized</TableCell>
                  <TableCell>Faculty Involved</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.year}>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.papersSubmitted}</TableCell>
                    <TableCell>{row.papersRecognized}</TableCell>
                    <TableCell>{row.facultyInvolved}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    </div>
  );
}

export default ResearchAndPublications;
