import React, { useState, useEffect } from "react";
import { DarkModeToggle } from "react-dark-mode-toggle-2";

function DarkMode() {
  // Initialize the state from localStorage, default to system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem("dark-mode");
    if (storedPreference !== null) {
      return storedPreference === "true";
    }

    // If no preference is stored, use system preference
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  // Effect to apply the dark mode class and save to localStorage
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("dark-mode", isDarkMode); // Store preference
  }, [isDarkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = (mode) => {
    setIsDarkMode(mode);
  };

  return (
    <>
      <DarkModeToggle
        isDarkMode={isDarkMode}
        onChange={toggleDarkMode}
        // Use the toggle function
      />
      {/* <DarkModeToggle onChange={toggleDarkMode} checked={isDarkMode} size={80} /> */}
    </>
  );
}

export default DarkMode;
