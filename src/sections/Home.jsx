import React from "react";
import { logoimage } from "../components/Images";
import LaptopFloat from "../three/LaptopFloat";
import { ReactTyped } from "react-typed";

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 80; // adjust based on navbar height
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="home"
      className="bg-gradient-bluetowhite dark:bg-gradient-bluetogrey min-h-screen flex flex-col justify-center items-center pt-4 relative overflow-hidden"
    >
      {/* <div
        className="text-left max-w-xl mx-auto md:mx-0"
        data-aos="fade-up"
      >
        <h4 className="text-xl md:text-5xl py-2">Hi there,</h4>
        <h4 className="text-xl md:text-5xl py-2">I am</h4>
        <img
          src={logoimage}
          alt="Vignesh Portfolio Logo"
          className="w-auto h-16 md:h-20 my-2"
        />

        <h1 className="text-2xl md:text-4xl font-bold py-2 text-nowrap text-blue-600 dark:text-blue-500">
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
            className="text-2xl md:text-3xl font-semibold"
          />
        </h1>
      </div> */}

      {/* RIGHT: 3D Laptop */}
      <div className="col-span-2 relative w-full h-[420px]  md:h-screen flex items-center justify-center z-0 pointer-events-auto">
        <LaptopFloat />
      </div>
      {/* </div> */}
      <div className="flex justify-center items-center py-8">
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce w-8 h-14 rounded-full border-4 border-blue-500 flex items-start justify-center p-2 cursor-pointer"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </button>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
