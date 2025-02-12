import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const StatisticsDashboard = ({ schedule }) => {
  // Sample data for charts
  const engagementData = [
    { date: "2024-12-01", likes: 120, comments: 45, shares: 30 },
    { date: "2024-12-02", likes: 90, comments: 60, shares: 50 },
    { date: "2024-12-03", likes: 150, comments: 85, shares: 40 },
  ];

  const platformData = [
    { platform: "Facebook", engagement: 350 },
    { platform: "Twitter", engagement: 220 },
    { platform: "Instagram", engagement: 450 },
    { platform: "LinkedIn", engagement: 310 },
  ];

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-6">Statistics Dashboard</h2>
      
      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div className="p-4 bg-blue-100 text-center rounded">
          <h3 className="text-lg font-bold">Total Posts</h3>
          <p className="text-2xl font-semibold">{schedule.length}</p>
        </div>
        <div className="p-4 bg-green-100 text-center rounded">
          <h3 className="text-lg font-bold">Total Scheduled Posts</h3>
          <p className="text-2xl font-semibold">{schedule.length}</p>
        </div>
        <div className="p-4 bg-yellow-100 text-center rounded">
          <h3 className="text-lg font-bold">Engagement Rate</h3>
          <p className="text-2xl font-semibold">75%</p>
        </div>
      </div>

      {/* Engagement Trends Chart */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Engagement Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="likes" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="comments" stroke="#82ca9d" />
            <Line type="monotone" dataKey="shares" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Platform Engagement Comparison */}
      <div>
        <h3 className="text-lg font-bold mb-2">Platform Engagement Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={platformData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="platform" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="engagement" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
