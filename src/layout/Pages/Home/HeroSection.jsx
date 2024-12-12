import React from "react";


const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 min-h-screen"> 
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between text-center md:text-left px-8 md:px-16 py-16">
        {/* Text Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Automate Your <span className="text-pink-400">Shorts & Reels</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Harness the power of AI to create and post engaging short videos to YouTube and Facebook daily. Save time, grow your audience, and achieve your content goals effortlessly.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#get-started"
              className="bg-pink-400 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-pink-500 transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="bg-transparent border-2 border-pink-400 text-pink-400 font-bold py-3 px-8 rounded-full hover:bg-pink-500 hover:text-indigo-900 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0">
          <img
            src="/banner.webp"
            alt="Hero Graphic"
            className="rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
