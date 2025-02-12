
import  { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, logOut} = useContext(AuthContext)

  // logout user
  const handleLogOut = () =>{
    logOut()
    .then(() =>{
    console.log('logout successfull')
    })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-opacity-80 backdrop-blur-lg shadow-lg bg-gradient-to-r from-green-900 via-green-800 to-orange-700">
      {/* Logo */}
      <div className="text-2xl font-bold text-white hover:text-pink-400 transition duration-300">
        <a href="/">Routine Tracker</a>
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
        <Link to="/dashboard">
          <a className="text-white hover:text-pink-300 transition duration-300">
            Dashboard
          </a>
        </Link>
      </ul>

      {/* Call to Action Button */}
      <div className="hidden md:block">
        {
          user ? (
        <a
          className="bg-green-400 text-indigo-900 font-bold py-2 px-6 rounded-full hover:bg-green-500 transition duration-300"
          onClick={handleLogOut}
        >
          LogOut
        </a>
          ) : (
            <Link to="/login">
        <a
          className="bg-green-400 text-indigo-900 font-bold py-2 px-6 rounded-full hover:bg-green-500 transition duration-300"
        >
          Login
        </a>
        </Link>
          )
        }
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
          <Link to="/dashboard">
          <a className="text-white hover:text-pink-300 transition duration-300">
            Dashboard
          </a>
        </Link>
          <Link to="/login">
            <a
              className="bg-pink-400 text-indigo-900 font-bold py-2 px-6 rounded-full hover:bg-pink-500 transition duration-300"
            >
              Login
            </a>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;