import React from "react";
import EducationBox from "../components/EducationBox";
import educationDetails from "../utils/EducationDetails";
import { studentimage } from "../components/Images";

function Education() {
    
  return (
    <section id="education">
      <div className="container mx-auto px-6 md:px-10 lg:px-32 py-5">
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
            Education Timeline
          </h2>
          <hr className="w-[140px] border-b-4 m-4 border-custom-textblue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div>
            <img className=" rounded-lg" src={studentimage} alt="" />
          </div>
          <div className="relative border-l-4 border-sky-500">
            {educationDetails.map((edu) => (
              <EducationBox
                key={edu.id}
                year={edu.year}
                course={edu.course}
                institute={edu.institute}
                city={edu.city}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
