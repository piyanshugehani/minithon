"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const LineChart = () => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Assigned to Me",
        data: [5, 9, 7, 8, 6],
        borderColor: "rgba(34, 193, 195, 1)", // Darker teal
        borderWidth: 3,
        pointBorderColor: "rgba(34, 193, 195, 1)", // Darker teal for points
        pointBackgroundColor: "white", // White points for contrast
        pointBorderWidth: 3,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(34, 193, 195, 0.5)"); // Lighter teal
          gradient.addColorStop(1, "rgba(34, 193, 195, 0)"); // Transparent
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "black", // Default for light mode
          font: { size: 12 },
        },
      },
      title: {
        display: true,
        text: "Daily Water Saving",
        color: "black", // Default for light mode
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black", // Default for light mode
        },
      },
      y: {
        ticks: {
          color: "black", // Default for light mode
        },
      },
    },
  };

  return (
    <div className="dark:bg-black bg-white text-black dark:text-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Daily Water Saving</h2>
      <div style={{ height: "300px" }}>
        <Line
          data={data}
          options={{
            ...options,
            plugins: {
              ...options.plugins,
              legend: {
                ...options.plugins.legend,
                labels: {
                  ...options.plugins.legend.labels,
                  color: "white", // Dark mode text
                },
              },
              title: {
                ...options.plugins.title,
                color: "white", // Dark mode text
              },
            },
            scales: {
              x: {
                ticks: {
                  color: "white", // Dark mode axis
                },
              },
              y: {
                ticks: {
                  color: "white", // Dark mode axis
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
