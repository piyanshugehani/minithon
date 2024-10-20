import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Emission Sved", "Electricity Usage", "Car Usage"],
    datasets: [
      {
        label: "# of Tasks",
        data: [12, 19, 7],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Not Started - soft light green
          "rgba(54, 162, 235, 0.6)", // In Progress - soft teal
          "rgba(153, 102, 255, 0.6)", // Completed - soft violet
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="dark:bg-black bg-white text-black dark:text-white p-4 rounded-lg shadow-md transition-shadow hover:shadow-xl">
      <h2 className="text-lg font-bold mb-4">Emission Breakdown</h2>
      <div className="flex items-center justify-center">
        <div style={{ maxWidth: "250px" }}>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
