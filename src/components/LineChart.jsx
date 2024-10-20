"use client";
import React from 'react';
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
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Assigned to Me',
        data: [5, 9, 7, 8, 6],
        borderColor: "rgb(67, 24, 255)",
        borderWidth: 3,
        pointBorderColor: "rgb(67, 24, 255)",
        pointBorderWidth: 3,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(67, 24, 255, 0.7)");
          gradient.addColorStop(1, "rgba(67, 24, 255, 0)");
          return gradient;
        },
      },
      {
        label: 'Created by Me',
        data: [4, 6, 5, 10, 9],
        borderColor: 'rgb(106, 210, 255)',
        borderWidth: 3,
        pointBorderColor: "rgb(106, 210, 255)",
        pointBorderWidth: 3,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(106, 210, 255, 0.7)");
          gradient.addColorStop(1, "rgba(106, 210, 255, 0)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#000', // default for light mode
          font: { size: 12 },
        },
      },
      title: {
        display: true,
        text: 'Daily Tasks Completed',
        color: '#000', // default for light mode
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#000', // default for light mode
        },
      },
      y: {
        ticks: {
          color: '#000', // default for light mode
        },
      },
    },
  };

  return (
    <div className="dark:bg-black bg-white text-black dark:text-white p-2 px-4 pt-4 rounded-lg shadow-md">
        <h2 className='text-lg font-bold mb-4'>Track of Daily Tasks</h2>
      <div style={{ height: '300px' }}>
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
                  color: 'white', // dark mode text
                },
              },
              title: {
                ...options.plugins.title,
                color: 'white', // dark mode text
              },
            },
            scales: {
              x: {
                ticks: {
                  color: 'white', // dark mode axis
                },
              },
              y: {
                ticks: {
                  color: 'white', // dark mode axis
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
