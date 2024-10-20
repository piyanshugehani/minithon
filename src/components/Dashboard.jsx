import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { BadgePercentIcon } from "lucide-react";
import WorldGlobe from "./WorldGlobe";

const DashboardCard = ({ title, value, icon }) => (
  <div className="dark:bg-black bg-white text-black dark:text-white p-2 px-4 pt-4 rounded-lg shadow-md flex items-center">
    <div className="mr-4 text-green-500 dark:text-green-400">{icon}</div>
    <div>
      <div className="text-gray-600 dark:text-gray-300 text-sm">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  </div>
);

const projects = [
  { name: "Deep Patel", progress: 80 },
  { name: "Rajesh Mishra", progress: 60 },
  { name: "Shri Hari", progress: 40 },
  { name: "Ashley Frenandes", progress: 90 },
];

const Dashboard = () => {
  return (
    <div className="p-4 min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white">
      <h2 className="pt-4 text-3xl font-bold mb-6">Morning, Tanvi!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard
          title="Carbon Emission Saved"
          value="2 KG"
          icon={<MdBarChart className="text-3xl" />}
        />

        <DashboardCard
          title="Beats"
          value="81% of our users"
          icon={<BadgePercentIcon className="text-3xl" />}
        />
        <DashboardCard
          title="Water Saved"
          value="50 Liters"
          icon={<MdFileCopy className="text-3xl" />}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="dark:bg-black bg-white text-black dark:text-white p-2 px-4 pt-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Daily World Emissions</h3>
          <WorldGlobe />
          <h3 className="text-lg font-bold mb-4">400 Metric Tons</h3>
        </div>

        <div className="dark:bg-black bg-white text-black dark:text-white p-2 px-4 pt-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Friends</h3>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="flex items-center">
                <div className="mr-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={`https://randomuser.me/api/portraits/thumb/men/${
                      index + 10
                    }.jpg`}
                    alt="User"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between mb-2">
                    <p className="font-semibold">{project.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{`${project.progress}%`}</p>
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PieChart />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <LineChart />
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
