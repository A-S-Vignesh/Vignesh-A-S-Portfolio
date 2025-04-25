import React from "react";
import skillsDetails from "../utils/skillsDetails";

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-6 lg:py-16" data-aos="fade-up">
      <div className="flex flex-col items-center justify-center mb-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Skills
        </h2>
        <hr
          className="w-[60px] border-b-4 m-4 border-custom-textblue"
          data-aos="fade-down"
          data-aos-delay="150"
        />
      </div>

      <p
        className="text-sm md:text-base text-center mb-8 md:mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Here are the technologies and tools I’ve worked with
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 justify-items-center">
        {skillsDetails.map((skill, index) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center p-4 w-full relative transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 50 + 200}
          >
            {/* Main content container */}
            <div className="flex flex-col items-center">
              {/* Image container with hover effect */}
              <div className="mb-3 p-2 rounded-lg transition-transform duration-300 group-hover:scale-110">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Skill name */}
              <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 text-center transition-transform duration-300 group-hover:translate-y-1">
                {skill.name}
              </p>
            </div>

            {/* Background effect - now properly contained */}
            <div className="absolute inset-0 rounded-lg bg-white dark:bg-gray-800 shadow-md group-hover:shadow-lg transition-all duration-300 -z-10" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
