import React from "react";

function EducationLaptop() {
  const educationDetails = [
    {
      year: "2021 - Present",
      degree: "Bachelor of Computer Science",
      institution: "Presidency College, Chennai",
    },
    {
      year: "2019 - 2021",
      degree: "Higher Secondary Education",
      institution: "XYZ Higher Secondary School, Chennai",
    },
    {
      year: "2017 - 2019",
      degree: "Secondary Education",
      institution: "ABC High School, Chennai",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-5xl font-semibold text-yellow-500 dark:text-yellow-400 mb-4">
        Education Timeline
      </h2>
      <div className="relative border-l-4 border-yellow-500 dark:border-yellow-400">
        {educationDetails.map((detail, index) => (
          <div key={index} className="mb-8 pl-8 relative">
            <div className="absolute -left-[16px] top-0 w-8 h-8 bg-yellow-500 dark:bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
            <p className="text-yellow-500 dark:text-yellow-400 text-2xl font-semibold">
              {detail.year}
            </p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {detail.degree}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xl">
              {detail.institution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationLaptop;
