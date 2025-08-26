import React, { useState } from "react";
import { clientProjects } from "../../utils/projectDetails";
import {
  FiExternalLink,
  FiGithub,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";

function ClientProjectLaptop() {
  const [activeProject, setActiveProject] = useState(0);
  const topProjects = clientProjects.slice(0, 2); // Show top 3 projects

  const nextProject = () => {
    setActiveProject((prev) =>
      prev === topProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setActiveProject((prev) =>
      prev === 0 ? topProjects.length - 1 : prev - 1
    );
  };

  return (
    <div
      id="laptopclientprojects"
      className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {" "}Client Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my most significant work, showcasing technical
            expertise and creative solutions.
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-all"
            aria-label="Previous project"
          >
            <FiChevronLeft className="text-xl text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-all"
            aria-label="Next project"
          >
            <FiChevronRight className="text-xl text-gray-700 dark:text-gray-300" />
          </button>

          {/* Project Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {topProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeProject
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Content */}
          {topProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row transition-opacity duration-500 ${
                index === activeProject
                  ? "opacity-100 block"
                  : "opacity-0 hidden"
              }`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 relative overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white translate-y-4 hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-light">
                      Click to view full project
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techstack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.livedemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                  >
                    <FiExternalLink className="text-sm" />
                    Live Demo
                  </a>
                  <a
                    href={project.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                  >
                    <FiGithub className="text-sm" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-8">
          <a
            href="/projects"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
          >
            View all projects
            <FiChevronRight className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClientProjectLaptop;
