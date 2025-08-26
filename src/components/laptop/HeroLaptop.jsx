import React from "react";
import { logoimage } from "../Images";
import { ReactTyped } from "react-typed";

function HeroLaptop() {
  const scrollToHero = () => {
    const scrollableContainer = document.querySelector(".scrollable-container"); // Ensure this matches your scrollable container class
    const heroSection = document.getElementById("hero"); // Replace with your Hero section's ID

    if (scrollableContainer && heroSection) {
      const heroPosition =
        heroSection.offsetTop - scrollableContainer.offsetTop;
      scrollableContainer.scrollTo({
        top: heroPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="text-left w-full min-h-[550px]" data-aos="fade-up">
      <div className="flex flex-col md:flex-row justify-center items-center  p-4 md:p-8">
        <div className="w-full md:w-1/2 p-4">
          <h4 className="text-7xl md:text-5xl py-2">Hi there,</h4>
          <h4 className="text-7xl md:text-5xl py-2">I am</h4>
          <img
            src={logoimage}
            alt="Vignesh Portfolio Logo"
            className="w-auto h-28 md:h-20 my-2"
          />

          <h1 className="font-bold py-2 text-nowrap text-blue-600 dark:text-blue-500">
            <ReactTyped
              strings={[
                "A Web Developer",
                "A Full Stack Developer",
                "A MERN Stack Developer",
                "A Programmer",
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop
              cursorChar="|"
              className="text-5xl md:text-3xl font-semibold"
            />
          </h1>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="images/vickywithpenguin2.png"
            alt="Main Visual"
            className="w-full h-auto rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-center">
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
    </div>
  );
}

export default HeroLaptop;
