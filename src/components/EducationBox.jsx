import React from 'react';

function EducationBox({ year, course, institute, city }) {
    
  return (
    <div className="mb-10 ml-8">
      {/* Dot */}
      <div className="absolute w-6 h-6 bg-sky-500 rounded-full -left-3.5 border-4 border-white"></div>
      {/* Timeline Content */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <span className="text-sm text-gray-500 dark:text-gray-300">
          {year}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {course}
        </h3>
        <h4 className="text-md text-gray-600 dark:text-gray-400">
          {institute} , {city}
        </h4>
        {/* <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                {edu.description}
              </p> */}
      </div>
    </div>
  );
}

export default EducationBox