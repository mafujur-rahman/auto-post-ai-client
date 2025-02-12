import React from "react";

const HeroSection = () => {
  return (
    <div 
      className="bg-cover bg-center h-screen flex justify-center items-center px-8 md:px-16" 
      style={{ backgroundImage: "url('/banner-img.jpeg')" }}
    >
      {/* Overlay for better readability */}
      <div className="inset-1 bg-black bg-opacity-100"></div>

      {/* Content */}
      <div className="relative max-w-xl text-center md:text-left text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-6">
          Automate Your <span className="text-green-500">Daily Routine</span>
        </h1>
        <p className="text-lg text-blue-800 mb-8">
          Stay on Track, One Day at a Time! 📅✅ Effortlessly plan, track, and complete your daily routines with our calendar-based system. Build consistency and stay productive!
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#get-started"
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-3 px-8 rounded-full hover:bg-green-600 hover:text-white transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
