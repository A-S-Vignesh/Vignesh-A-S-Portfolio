import React from "react";
import { logoimage } from "../components/Images";
import LaptopFloat from "../three/LaptopFloat";

function Home() {
  return (
    <div
      id="home"
      className="bg-gradient-bluetowhite dark:bg-gradient-bluetogrey relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Container for proper padding on large screens */}
      <div className="container mx-auto px-6 md:px-12 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
          {/* LEFT: Text Content (1/3) */}
          <div
            className="col-span-1 text-center md:text-left max-w-xl mx-auto md:mx-0"
            data-aos="fade-up"
          >
            <h1 className="text-xl md:text-5xl p-2">Hi there,</h1>
            <h1 className="text-xl md:text-5xl p-2">I am</h1>
            <div className="p-2">
              <img
                className="h-[60px] md:h-[80px] lg:h-[120px] mx-auto md:mx-0"
                src={logoimage}
                alt="Vignesh A S"
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold p-2">
              A Web Developer
            </h1>
          </div>

          {/* RIGHT: 3D Laptop (2/3) */}
          <div className="col-span-2 relative w-full h-[310px] md:h-[600px] flex items-center justify-center z-0 pointer-events-none">
            <LaptopFloat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
