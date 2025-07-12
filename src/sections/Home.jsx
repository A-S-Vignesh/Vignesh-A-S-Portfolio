import React from "react";
import { logoimage } from "../components/Images";
import LaptopFloat from "../three/LaptopFloat";

function Home() {
  return (
    <div
      id="home"
      className="bg-gradient-bluetowhite dark:bg-gradient-bluetogrey relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-32 relative z-10">
        {/* LEFT: Text Content */}
        <div className="text-center md:text-left max-w-xl" data-aos="fade-up">
          <h1 className="text-xl md:text-5xl p-2">Hi there,</h1>
          <h1 className="text-xl md:text-5xl p-2">I am</h1>
          <h1 className="text-blue-500 text-4xl md:text-7xl font-extrabold p-2">
            <img
              className="h-[60px] md:h-[80px] lg:h-[120px]"
              src={logoimage}
              alt="Vignesh A S"
            />
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold p-2">
            A Web Developer
          </h1>
        </div>

        {/* RIGHT: 3D Laptop */}
        <div className="relative w-full max-w-[750px] h-[400px] md:h-[500px] lg:h-[500px] flex items-center justify-center z-0 pointer-events-none">
          <LaptopFloat />
        </div>
      </div>
    </div>
  );
}

export default Home;
