
import  { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-opacity-80 backdrop-blur-lg shadow-lg bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700">
      {/* Logo */}
      <div className="text-2xl font-bold text-white hover:text-pink-400 transition duration-300">
        <a href="/">AutoPost AI</a>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="#features" className="text-white hover:text-pink-300 transition duration-300">
            Features
          </a>
        </li>
        <li>
          <a href="#pricing" className="text-white hover:text-pink-300 transition duration-300">
            Pricing
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-pink-300 transition duration-300">
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-pink-300 transition duration-300">
            Contact
          </a>
        </li>
      </ul>

      {/* Call to Action Button */}
      <div className="hidden md:block">
        <Link to="/login">
        <a
          className="bg-pink-400 text-indigo-900 font-bold py-2 px-6 rounded-full hover:bg-pink-500 transition duration-300"
        >
          Get Started
        </a>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl focus:outline-none" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="material-icons">close</span>
        ) : (
          <span className="material-icons">menu</span>
        )}
      </button>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <ul className="flex flex-col space-y-4 mt-4 px-8 md:hidden bg-indigo-800 bg-opacity-90 py-4 rounded-lg shadow-lg">
          <li>
            <a href="#features" className="text-white hover:text-pink-300 transition duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-white hover:text-pink-300 transition duration-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-pink-300 transition duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-pink-300 transition duration-300">
              Contact
            </a>
          </li>
          <Link to="/login">
            <a
              className="bg-pink-400 text-indigo-900 font-bold py-2 px-6 rounded-full hover:bg-pink-500 transition duration-300"
            >
              Get Started
            </a>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;