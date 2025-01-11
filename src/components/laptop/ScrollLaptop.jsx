import React from "react";

function ScrollLaptop() {
  const scrollToHero = () => {
    const scrollableContainer = document.querySelector(".scrollable-container"); // Ensure this matches your scrollable container class
    const heroSection = document.getElementById("hero"); // Replace with your Hero section's ID

    if (scrollableContainer && heroSection) {
      const heroPosition =
        heroSection.offsetTop - scrollableContainer.offsetTop-350;
      scrollableContainer.scrollTo({
        top: heroPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <p className="text-4xl font-semibold text-center mb-4">
        Scroll to see my old portfolio
      </p>
      <button
        onClick={scrollToHero}
        className="flex flex-col items-center animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-yellow-500 dark:text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="mt-2 text-sm font-medium">Scroll</span>
      </button>
    </div>
  );
}

export default ScrollLaptop;
