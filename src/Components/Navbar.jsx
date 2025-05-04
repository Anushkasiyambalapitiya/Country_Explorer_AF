import React, { useState } from "react";
import { FaHome, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-950 to-blue-900 text-white shadow-sm px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-white text-2xl md:text-3xl flex items-center space-x-2">
            <FaGlobe />
            <span>Rest Countries</span>
          </span>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Right Side for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/countries" className="text-white hover:text-white flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </a>
          <Link
           to="/signIn"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden">
          <a href="/countries" className="text-white flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </a>
          <button
            type="button"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default HeaderNavbar;
