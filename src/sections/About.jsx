import React from 'react'
import Navbar from "../components/Navbar.jsx";
import { myimage } from '../components/Images';

function About() {
  return (
    <section id='about' className="dark:bg-custom-grey">
      <div className="flex flex-col items-center justify-center container mx-auto px-6 md:px-10 lg:px-32 py-5">
        {/* <div className="w-1/3">
        <img src={myimage} alt="vignesh" />
      </div> */}
        <h3 className="text-3xl font-bold">About Me</h3>
        <hr className="w-[90px] border-b-4 m-4 border-custom-textblue" />
        <div className="">
          <p
            className="text-xl md:text-2xl tracking-wider leading-relaxed py-2"
            data-aos="fade-up"
          >
            Hello! I'm
            <span className="text-custom-textblue dark:text-sky-500 font-extrabold">
              {" "}
              Vignesh A S{" "}
            </span>
            , a passionate full-stack developer. I bring a creative and
            solution-oriented approach to crafting digital experiences. With a
            strong foundation in modern web technologies like React, Tailwind
            CSS, JavaScript, Node.js, Express.js, and MongoDB, I enjoy
            transforming ideas into functional and visually appealing websites.
            I am always eager to stay ahead of the curve, exploring new
            frameworks and tools to enhance my skill set and deliver innovative
            solutions.
          </p>

          <p
            className="text-xl md:text-2xl tracking-wider leading-relaxed py-2"
            data-aos="fade-up"
          >
            My journey is fueled by curiosity and a commitment to continuous
            learning. Beyond coding, I thrive on challenges that push my
            boundaries, enabling me to grow both personally and professionally.
            I believe that collaboration and adaptability are key to success in
            the dynamic tech landscape, and I look forward to contributing my
            expertise to meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About