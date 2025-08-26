import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

function FooterLaptop() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Branding Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Vignesh A S
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Full Stack Developer & Creative Problem Solver
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Turning ideas into functional, elegant digital solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5">
            <a
              href="https://github.com/A-S-Vignesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <FiGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/a-s-vignesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Email"
            >
              <FiMail className="text-xl" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 md:mb-0">
            © {currentYear} Vignesh A S. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span>Made with</span>
            <FiHeart className="text-red-500 mx-1" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterLaptop;
