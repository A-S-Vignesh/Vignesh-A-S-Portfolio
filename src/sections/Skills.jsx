import React from "react";
import skillsDetails from "../utils/skillsDetails";

const Skills = () => {


  return (
    <section id="skills" className="p-6 ">
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
          Skills
        </h2>
        <hr className="w-[60px] border-b-4 m-4 border-custom-textblue" />
      </div>
      <p className="text-sm md:text-base text-center mb-8 text-gray-600 dark:text-gray-400">
        Here are the technologies and tools I’ve worked with
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {skillsDetails.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col justify-center items-center hover:scale-105 transform transition-transform duration-300"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 mb-2"
            />
            <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
