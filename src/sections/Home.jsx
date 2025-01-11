import React from "react";
import Spider from "../components/Spider";

import { mainimage,logoimage, cloud } from "../components/Images";
import SpinningCube from "../components/SpinningCube";
import LaptopFloat from "../three/LaptopFloat";

function Home() {
  return (
    <div
      id="home"
      className="bg-gradient-bluetowhite dark:bg-gray-800 relative pb-8 dark:bg-gradient-bluetogrey"
    >
      {/* <Spider /> */}
      {/* <SpinningCube /> */}

      <div className="relative">
        {/* <img className="absolute" src={cloud} alt="cloud" /> */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around min-h-screen">
          <div
            className="text-center lg:text-left md:text-left"
            data-aos="fade-up"
          >
            <h1 className="text-xl md:text-5xl lg:text-5xl p-4">Hi there ,</h1>
            <h1 className="text-xl md:text-5xl lg:text-5xl p-4">I am</h1>
            <h1 className="text-blue-500 text-nowrap text-4xl md:text-7xl lg:text-7xl p-4 font-extrabold font-helveticaNeue">
              <img className="h-[60px] md:h-[80px] lg:h-[120px]" src={logoimage} alt="" />
            </h1>
            <h1 className="text-2xl md:text-4xl lg:text-4xl p-4 font-bold">
              A Web Developer
            </h1>
          </div>
          <div className="">
            <LaptopFloat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
