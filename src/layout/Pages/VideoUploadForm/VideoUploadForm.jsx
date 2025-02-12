import React, { useState } from "react";
import axios from "axios";  // For making HTTP requests to fetch trending topics

const AIAutoHistoryVideoGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState(null);
  const [topic, setTopic] = useState("");

  const fetchTrendingTopic = async () => {
    // Example API request to fetch trending news (using NewsAPI as a placeholder)
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          apiKey: "YOUR_NEWS_API_KEYd1bb9a2bee6f48429ed59f81227281e3",  // Use your NewsAPI key here
        },
      });
      const trendingStory = response.data.articles[0]; // Take the first article as the trending topic
      return trendingStory.title; // The title of the trending news article
    } catch (error) {
      console.error("Error fetching trending topic:", error);
      return "The Rise and Fall of the Roman Empire"; // Fallback if API call fails
    }
  };

  const generateVideo = async (topic) => {
    setLoading(true);
  }

  return (
    <div className="p-6 bg-gray-100 rounded shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        AI History Video Generator
      </h2>
      <p className="text-gray-600 mb-4">
        Generate a professional HD history-telling video using AI.
      </p>

      <button
        onClick={() => generateVideo(null)}
        className={`w-full py-2 px-4 rounded text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
        disabled={loading}
      >
        {loading ? "Generating Video..." : "Generate History Video"}
      </button>

      {topic && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Trending Topic:</h3>
          <p className="text-gray-700">{topic}</p>
        </div>
      )}

      {generatedVideo && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Generated Video:</h3>
          <video
            controls
            className="w-full rounded border"
            src={generatedVideo}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default AIAutoHistoryVideoGenerator;
