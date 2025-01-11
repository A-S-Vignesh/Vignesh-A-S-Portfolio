import React from "react";
import ProjectBox from "../components/ProjectBox";
import projectDetails from "../utils/projectDetails";

function Project() {
  return (
    <section id="projects">
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
          Projects
        </h2>
        <hr className="w-[70px] border-b-4 m-4 border-custom-textblue" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectDetails.map((data) => {
            return (
              <ProjectBox
                key={data.id}
                name={data.name}
                image={data.image}
                detail={data.description}
                gitlink={data.gitlink}
                livedemo={data.livedemo}
                fade={data.fade}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
