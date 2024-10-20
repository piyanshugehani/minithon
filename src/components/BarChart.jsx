import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components for ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Emission Generated",
        data: [5, 12, 19, 3, 5, 2, 8],
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Light teal
      },
      {
        label: "Emission Saved",
        data: [3, 7, 11, 5, 8, 3, 4],
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Light blue
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "black", // Change legend text color
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)", // Tooltip background
        titleColor: "black",
        bodyColor: "black",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#333", // X-axis labels color
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Grid color
        },
      },
      y: {
        ticks: {
          color: "#333", // Y-axis labels color
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Grid color
        },
      },
    },
  };

  return (
    <div className="dark:bg-black bg-white text-black dark:text-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Carbon Emission Overview</h2>
      <div style={{ height: "300px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
