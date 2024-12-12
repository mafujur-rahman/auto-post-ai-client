
const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-blue-700 shadow-md">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-300">
            AutoPost AI
          </a>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#features" className="hover:text-gray-300">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-gray-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
        <div className="hidden md:block">
          <a
            href="#get-started"
            className="bg-yellow-400 text-blue-800 font-bold py-2 px-4 rounded hover:bg-yellow-300"
          >
            Get Started
          </a>
        </div>
        <button className="md:hidden flex items-center text-2xl">
          <span className="material-icons">menu</span>
        </button>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between text-center md:text-left px-6 md:px-16 py-20">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Automate Your <span className="text-yellow-400">Shorts & Reels</span> Creation
          </h1>
          <p className="mt-4 text-lg">
            Leverage AI to create and post stunning short videos to YouTube and Facebook daily. Save time, grow your audience, and focus on creativity!
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="#get-started"
              className="bg-yellow-400 text-blue-800 font-bold py-3 px-6 rounded hover:bg-yellow-300"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-6 rounded hover:bg-yellow-300 hover:text-blue-800"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src="https://source.unsplash.com/500x500/?technology,ai"
            alt="Hero Graphic"
            className="rounded-lg shadow-lg"
          />
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
