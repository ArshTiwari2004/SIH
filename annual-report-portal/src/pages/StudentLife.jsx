import React, { useState } from "react";
import { Bar, Pie, Doughnut, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Typography, Card, Divider } from "@mui/material";

// Sample Data for Student Life
const generateStudentLifeData = () => {
  return {
    satisfactionScore: 85, // Percentage
    clubParticipation: {
      labels: ["Cultural", "Technical", "Sports", "Social", "Art & Music"],
      values: [40, 30, 50, 20, 10],
    },
    studentDemographics: {
      labels: ["Local", "Out-of-state", "International"],
      values: [50, 40, 10],
    },
    eventParticipation: {
      labels: ["2020", "2021", "2022", "2023"],
      values: [1000, 1200, 1500, 1800],
    },
    overallEngagement: 75, // Percentage
  };
};

// Generate Chart Data
const generateChartData = (chartType, data) => {
  switch (chartType) {
    case "bar":
      return {
        labels: data.labels || [],
        datasets: [
          {
            label: "Data",
            data: data.values || [],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
            ],
            borderWidth: 1,
          },
        ],
      };
    case "pie":
      return {
        labels: data.labels || [],
        datasets: [
          {
            data: data.values || [],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
            ],
          },
        ],
      };
    case "line":
      return {
        labels: data.labels || [],
        datasets: [
          {
            label: "Event Participation",
            data: data.values || [],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            fill: true,
          },
        ],
      };
    default:
      return {};
  }
};

function StudentLife() {
  const [data] = useState(generateStudentLifeData());

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Student Life at Our Institute</h1>
      
      {/* Introductory Section with Written Data */}
      <Box className="mb-8">
        <Typography variant="h6">Campus Atmosphere</Typography>
        <Typography variant="body1" paragraph>
          Our institute prides itself on offering a vibrant and inclusive student life. With a diverse range of activities and organizations, students have the opportunity to engage in extracurriculars, build leadership skills, and create lasting friendships. Over the past few years, student participation in various events and clubs has grown significantly, reflecting the enthusiasm and involvement of our student body.
        </Typography>
        <Typography variant="h6">Student Satisfaction</Typography>
        <Typography variant="body1" paragraph>
          Recent surveys show that 85% of students are satisfied with their campus experience, highlighting strong academic programs, supportive faculty, and a range of social and cultural activities.
        </Typography>
        <Typography variant="h6">Diversity and Inclusion</Typography>
        <Typography variant="body1" paragraph>
          Our campus is home to students from various regions, with 50% of our students hailing from local areas, 40% from other states, and 10% coming from international backgrounds. This diversity enriches the campus environment and encourages global perspectives.
        </Typography>
        <Typography variant="h6">Student Clubs and Activities</Typography>
        <Typography variant="body1" paragraph>
          Participation in student clubs is a core component of student life. A recent survey shows that 40% of students are involved in cultural clubs, 30% in technical clubs, 50% in sports activities, 20% in social clubs, and 10% in art and music.
        </Typography>
      </Box>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Student Satisfaction Circle Progress */}
        <Card className="p-4">
          <Typography variant="h6">Student Satisfaction</Typography>
          <Divider />
          <Box className="mt-4">
            <CircularProgressbar value={data.satisfactionScore} text={`${data.satisfactionScore}%`} />
            <Typography variant="body2" className="mt-2">85% students report satisfaction</Typography>
          </Box>
        </Card>

        {/* Club Participation Bar Chart */}
        <Card className="p-4">
          <Typography variant="h6">Club Participation</Typography>
          <Divider />
          <Bar data={generateChartData("bar", data.clubParticipation)} options={{ responsive: true }} />
        </Card>

        {/* Student Demographics Pie Chart */}
        <Card className="p-4">
          <Typography variant="h6">Student Demographics</Typography>
          <Divider />
          <Pie data={generateChartData("pie", data.studentDemographics)} options={{ responsive: true }} />
        </Card>

        {/* Event Participation Line Chart */}
        <Card className="p-4">
          <Typography variant="h6">Event Participation Over the Years</Typography>
          <Divider />
          <Line data={generateChartData("line", data.eventParticipation)} options={{ responsive: true }} />
        </Card>

        {/* Overall Engagement Circle Progress */}
        <Card className="p-4">
          <Typography variant="h6">Overall Campus Engagement</Typography>
          <Divider />
          <Box className="mt-4">
            <CircularProgressbar value={data.overallEngagement} text={`${data.overallEngagement}%`} />
            <Typography variant="body2" className="mt-2">75% of students are actively engaged in campus life</Typography>
          </Box>
        </Card>

      </div>

      {/* Conclusion Section */}
      <Box className="mt-8">
        <Typography variant="h6">Conclusion</Typography>
        <Typography variant="body1" paragraph>
          Our institute continues to foster an environment where students can grow academically, socially, and personally. With a high level of student satisfaction and involvement, our campus is a place where students thrive in all aspects of life.
        </Typography>
      </Box>
    </div>
  );
}

export default StudentLife;
