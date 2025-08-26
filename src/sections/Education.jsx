import React from "react";
import EducationBox from "../components/EducationBox";
import educationDetails from "../utils/EducationDetails";
import { studentimage } from "../components/Images";

function Education() {
  return (
    <section id="education" data-aos="fade-up" data-aos-duration="600">
      <div className="container mx-auto px-6 md:px-10 lg:px-32 py-5 overflow-hidden">
        <div
          className="flex flex-col items-center justify-center mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
            Education Timeline
          </h2>
          <hr
            className="w-[140px] border-b-4 m-4 border-custom-textblue"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div data-aos="fade-right" data-aos-delay="400">
            <img
              className="rounded-lg"
              src={studentimage}
              alt="Education illustration"
            />
          </div>

          <div
            className="relative border-l-4 border-sky-500"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            {educationDetails.map((edu, index) => (
              <EducationBox
                key={edu.id}
                year={edu.year}
                course={edu.course}
                institute={edu.institute}
                city={edu.city}
                delay={index * 100} // Stagger animation for each item
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
