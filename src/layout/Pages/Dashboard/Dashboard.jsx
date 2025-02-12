import React, { useState } from "react";
import StatisticsDashboard from "./StatisticsDashboard";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [linkedAccounts, setLinkedAccounts] = useState({
        youtube: "user_youtube_account",
        facebook: "user_facebook_account",
      });
    
      const handleUnlinkAccount = (platform) => {
        setLinkedAccounts((prev) => ({ ...prev, [platform]: null }));
        alert(`${platform.charAt(0).toUpperCase() + platform.slice(1)} account unlinked successfully!`);
      };
    
      const handleUpdateAccount = (platform) => {
        const newAccount = prompt(`Enter new ${platform} account:`);
        if (newAccount) {
          setLinkedAccounts((prev) => ({ ...prev, [platform]: newAccount }));
          alert(`${platform.charAt(0).toUpperCase() + platform.slice(1)} account updated successfully!`);
        }
      };

  const [videoSettings, setVideoSettings] = useState({
    style: "Explainer",
    subtitles: true,
    script: "",
  });

  const handleStyleChange = (event) => {
    setVideoSettings((prev) => ({
      ...prev,
      style: event.target.value,
    }));
  };

  const toggleSubtitles = () => {
    setVideoSettings((prev) => ({
      ...prev,
      subtitles: !prev.subtitles,
    }));
  };

  const handleScriptUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setVideoSettings((prev) => ({
          ...prev,
          script: reader.result,
        }));
        alert("Script uploaded successfully!");
      };
      reader.readAsText(file);
    }
  };


  const [schedule, setSchedule] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    date: "",
    time: "",
    platform: "Facebook",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewSchedule((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addSchedule = (event) => {
    event.preventDefault();
    if (newSchedule.date && newSchedule.time) {
      setSchedule((prev) => [...prev, newSchedule]);
      setNewSchedule({
        date: "",
        time: "",
        platform: "Facebook",
      });
    } else {
      alert("Please select both date and time!");
    }
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Account Management */}
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-4">Account Management</h2>
            <div className="mb-4">
              <p>
                <strong>YouTube: </strong>
                {linkedAccounts.youtube || "Not Linked"}
              </p>
              {linkedAccounts.youtube ? (
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleUnlinkAccount("youtube")}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Unlink
                  </button>
                  <button
                    onClick={() => handleUpdateAccount("youtube")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Update
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleUpdateAccount("youtube")}
                  className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                >
                  Link YouTube Account
                </button>
              )}
            </div>

            <div>
              <p>
                <strong>Facebook: </strong>
                {linkedAccounts.facebook || "Not Linked"}
              </p>
              {linkedAccounts.facebook ? (
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleUnlinkAccount("facebook")}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Unlink
                  </button>
                  <button
                    onClick={() => handleUpdateAccount("facebook")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Update
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleUpdateAccount("facebook")}
                  className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                >
                  Link Facebook Account
                </button>
              )}
            </div>
          </div>


          {/* Video Generation */}
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-4">Video Generation</h2>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Video Style</label>
              <select
                value={videoSettings.style}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Explainer">Explainer</option>
                <option value="Promotional">Promotional</option>
                <option value="Tutorial">Tutorial</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Subtitles</label>
              <button
                onClick={toggleSubtitles}
                className={`w-full p-2 rounded ${
                  videoSettings.subtitles
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {videoSettings.subtitles ? "Enabled" : "Disabled"}
              </button>
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Upload Script</label>
              <input
                type="file"
                accept=".txt"
                onChange={handleScriptUpload}
                className="w-full p-2 border rounded"
              />
              {videoSettings.script && (
                <p className="mt-2 text-sm text-gray-600">
                  Script Uploaded: {videoSettings.script.substring(0, 30)}...
                </p>
              )}
            </div>
          </div>

          {/* Posting Schedule */}
          <div className="p-4 bg-white shadow rounded col-span-2">
            <h2 className="text-xl font-semibold mb-4">Posting Schedule</h2>
            <form onSubmit={addSchedule} className="mb-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="block mb-2 font-medium">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={newSchedule.date}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={newSchedule.time}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Platform</label>
                  <select
                    name="platform"
                    value={newSchedule.platform}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Add Schedule
              </button>
              <Link to='/video-upload-form'>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Video Upload Form</button>
              </Link>
            </form>

            <h3 className="text-lg font-bold mb-2">Scheduled Posts</h3>
            {schedule.length > 0 ? (
              <table className="w-full border text-left">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2">Date</th>
                    <th className="p-2">Time</th>
                    <th className="p-2">Platform</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-2">{item.date}</td>
                      <td className="p-2">{item.time}</td>
                      <td className="p-2">{item.platform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-600">No posts scheduled yet.</p>
            )}
          </div>

          {/* Statistics */}
          <div className="p-4 bg-white shadow w-fit rounded">
            <h2 className="text-xl font-semibold mb-4">Statistics</h2>
            <StatisticsDashboard schedule={schedule} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
