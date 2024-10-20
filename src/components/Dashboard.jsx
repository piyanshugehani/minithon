import React from 'react';
import { MdAddTask, MdAttachMoney, MdBarChart, MdFileCopy } from 'react-icons/md';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import { BadgePercentIcon } from 'lucide-react';

const DashboardCard = ({ title, value, icon }) => (
  <div className=" dark:bg-black bg-white text-black dark:text-white p-2 px-4 pt-4 rounded-lg shadow-md flex items-center">
    <div className="mr-4 text-blue-500 dark:text-blue-400">{icon}</div>
    <div>
      <div className="text-gray-600 dark:text-gray-300 text-sm">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  </div>
);

const tasks = [
  { name: 'Task 1', time: '10 minutes ago', progress: '20%' },
  { name: 'Task 2', time: '1 day ago', progress: '45%' },
  { name: 'Task 3', time: '2 days ago', progress: '75%' },
  { name: 'Task 4', time: '5 days ago', progress: '95%' },
];

const projects = [
  { name: 'Project Alpha', progress: 80 },
  { name: 'Project Beta', progress: 60 },
  { name: 'Project Gamma', progress: 40 },
  { name: 'Project Delta', progress: 90 },
];

const Dashboard = () => {
  return (
    <div className="p-4 min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white">
      <h2 className="pt-4 text-3xl font-bold mb-6">User Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard
          title="Unassigned"
          value="14 tasks"
          icon={<MdBarChart className="text-3xl" />}
        />
        <DashboardCard
          title="In Progress"
          value="8 tasks"
          icon={<MdAttachMoney className="text-3xl" />}
        />
        <DashboardCard
          title="Completed"
          value="7 tasks"
          icon={<MdAddTask className="text-3xl" />}
        />
        <DashboardCard
          title="Task Completion Rate"
          value="81%"
          icon={<BadgePercentIcon className="text-3xl" />}
        />
        <DashboardCard
          title="Total Projects"
          value="2935"
          icon={<MdFileCopy className="text-3xl" />}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="dark:bg-black bg-white text-black dark:text-white p-2 px-4 pt-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Assigned to me</h3>
          <ul className="space-y-4">
            {tasks.map((task, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{task.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{task.time}</p>
                </div>
                <div className="bg-gray-200 dark:bg-gray-600 rounded-full h-2 w-24">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: task.progress }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="dark:bg-black bg-white text-black dark:text-white p-2 px-4 pt-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Created by me</h3>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="flex items-center">
                <div className="mr-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={`https://randomuser.me/api/portraits/thumb/men/${index + 10}.jpg`}
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
                      className="bg-green-400 h-2 rounded-full"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="dark:bg-black bg-white text-black dark:text-white p-2 px-4 pt-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Chats</h3>
          <div className="space-y-4">
            <div className="flex items-center p-3 border dark:border-gray-700 rounded-lg">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://randomuser.me/api/portraits/thumb/men/1.jpg"
                alt="User"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Notes from yesterday's meeting: Show more meta data on collapse sections
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 border dark:border-gray-700 rounded-lg">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://randomuser.me/api/portraits/thumb/women/2.jpg"
                alt="User"
              />
              <div>
                <p className="font-semibold">Jane Smith</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Can we schedule a meeting?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dark:bg-black bg-white text-black dark:text-white p-2 px-4 pt-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Activities</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Activity One</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Description of activity one.</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">5 mins ago</p>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Activity Two</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Description of activity two.</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">1 hour ago</p>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Activity Three</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Description of activity three</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">1 hour ago</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
