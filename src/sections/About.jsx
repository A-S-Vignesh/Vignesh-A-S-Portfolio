import React from "react";

function About() {
  return (
    <section id="about" data-aos="fade-up" className="scroll-mt-20">
      <div className="flex flex-col items-center justify-center container mx-auto px-6 md:px-10 lg:px-32 py-5">
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-3xl font-bold">About Me</h3>
          <hr
            className="w-[90px] border-b-4 m-4 border-custom-textblue"
          />
        </div>

        <p
          className="text-xl md:text-2xl tracking-wider leading-relaxed py-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Hello! I'm
          <span className="text-custom-textblue dark:text-sky-500 font-extrabold">
            {" "}
            Vignesh A S{" "}
          </span>
          , A passionate full-stack developer bringing creative and
          solution-oriented approaches to crafting digital experiences. With
          expertise in modern web technologies like React, Tailwind CSS,
          JavaScript, Node.js, Express.js, and MongoDB, I specialize in
          transforming ideas into functional and visually appealing websites.
        </p>

        <p
          className="text-xl md:text-2xl tracking-wider leading-relaxed py-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          My journey is fueled by curiosity and continuous learning. Beyond
          coding, I thrive on challenges that push boundaries, fostering both
          personal and professional growth. I believe collaboration and
          adaptability are key in the tech landscape, and I'm eager to
          contribute my expertise to meaningful projects.
        </p>
      </div>
    </section>
  );
}

export default About;
