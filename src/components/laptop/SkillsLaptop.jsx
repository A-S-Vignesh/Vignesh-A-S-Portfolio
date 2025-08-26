import React, { useState, useEffect } from "react";
import skillsDetails from "../../utils/skillsDetails";
import { FiCode, FiCpu, FiDatabase, FiTool } from "react-icons/fi";

function SkillsLaptop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger on component mount
    setIsVisible(true);
  }, []);

  // Categorize skills for better organization
  const skillCategories = {
    frontend: skillsDetails.filter((skill) =>
      ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS"].includes(
        skill.name
      )
    ),
    backend: skillsDetails.filter((skill) =>
      [
        "Node.js",
        "Next js",
        "MongoDB",
        "JWT",
        "RESTful API",
        "Socket.IO",
      ].includes(skill.name)
    ),
    tools: skillsDetails.filter((skill) =>
      ["Git", "GitHub", "VS Code", "Excel"].includes(skill.name)
    ),
    data: skillsDetails.filter((skill) => ["JSON"].includes(skill.name)),
  };

  return (
    <div
      id="laptopskills"
      className="w-full bg-gradient-to-b from-sky-200 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Technical{" "}
            <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life and solve
            complex problems.
          </p>
        </div>

        {/* Skills Grid with Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div
            className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                <FiCode className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Frontend Development
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skillCategories.frontend.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative mb-2">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="h-12 w-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div
            className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-500 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <FiCpu className="text-2xl text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Backend Development
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skillCategories.backend.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg group hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative mb-2">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="h-12 w-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div
            className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-500 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                <FiTool className="text-2xl text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Development Tools
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skillCategories.tools.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative mb-2">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="h-12 w-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Formats */}
          <div
            className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-500 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-4">
                <FiDatabase className="text-2xl text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Data Formats
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skillCategories.data.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg group hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative mb-2">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="h-12 w-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-yellow-600 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Proficiency Indicator */}
        <div
          className={`mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-500 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
            Skill Proficiency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillsDetails.slice(0, 8).map((skill, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-8 w-8 object-contain mr-3"
                />
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400">
                      {Math.floor(Math.random() * 20) + 80}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${Math.floor(Math.random() * 20) + 80}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsLaptop;
