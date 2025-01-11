import React from "react";

const AboutLaptop = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="">
            <h2 className="text-5xl font-bold text-yellow-500 dark:text-yellow-400 py-6">
              About Me
            </h2>
            <p className="text-3xl mt-4 text-justify text-indent-4">
              Hello! I'm Vignesh A S, a passionate Web Developer with expertise
              in building dynamic and responsive web applications. I specialize
              in front-end technologies like React and Next.js, with experience
              in back-end frameworks like Express.js and Node.js. I am always
              eager to learn and explore new technologies to build modern web
              solutions.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="text-5xl font-semibold text-yellow-500 dark:text-yellow-400">
              Skills
            </h3>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li className="text-2xl">React.js & Next.js</li>
              <li className="text-2xl">Node.js & Express.js</li>
              <li className="text-2xl">MongoDB</li>
              <li className="text-2xl">Tailwind CSS & Bootstrap</li>
              <li className="text-2xl">JavaScript & ES6+</li>
              <li className="text-2xl">Version Control (Git & GitHub)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-4xl font-semibold text-yellow-500 dark:text-yellow-400">
              Hobbies & Interests
            </h3>
            <p className="text-3xl mt-4 text-justify">
              In my free time, I enjoy exploring new technologies, contributing
              to open-source projects, and experimenting with web animations. I
              also like playing video games and watching tech talks to stay
              updated with the latest trends in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLaptop;
