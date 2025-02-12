import React from "react";
import { FiHome, FiCalendar, FiUser, FiSettings, FiCheckSquare, FiBell } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <NavItem icon={<FiHome />} label="Home" />
          <NavItem icon={<FiCheckSquare />} label="Tasks" />
          <NavItem icon={<FiCalendar />} label="Calendar" />
          <NavItem icon={<FiUser />} label="Profile" />
          <NavItem icon={<FiSettings />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Welcome Back!</h2>
          <div className="flex items-center space-x-4">
            <FiBell className="text-gray-600 text-xl cursor-pointer hover:text-gray-900" />
            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
              U
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="Today's Progress" value="75%" description="Tasks completed today" />
          <DashboardCard title="Total Tasks" value="120" description="Total tasks tracked" />
          <DashboardCard title="Streaks" value="7 Days" description="Consistent task completion" />

          {/* Calendar Section */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Tasks</h3>
            <p className="text-gray-600">No tasks for today. Enjoy your free time! 🎉</p>
          </div>
        </main>
      </div>
    </div>
  );
};

/* Reusable Navigation Item Component */
const NavItem = ({ icon, label }) => (
  <div className="flex items-center space-x-3 text-gray-700 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-lg transition">
    <span className="text-lg">{icon}</span>
    <span className="font-medium">{label}</span>
  </div>
);

/* Reusable Dashboard Card Component */
const DashboardCard = ({ title, value, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-3xl font-bold text-pink-500 mt-2">{value}</p>
    <p className="text-gray-600 mt-1">{description}</p>
  </div>
);

export default Dashboard;
