import React from "react";
import "./laptop/style.css";
import HeroLaptop from "./laptop/HeroLaptop";
import AboutLaptop from "./laptop/AboutLaptop";
import ProjectLaptop from "./laptop/ProjectLaptop";
import FooterLaptop from "./laptop/FooterLaptop";
import ClientProjectLaptop from "./laptop/ClientProjectLaptop";
import SkillsLaptop from "./laptop/SkillsLaptop";

const LaptopPage = () => {
  return (
    <div className="bg-sky-200 text-gray-900 dark:bg-gray-900 dark:text-white">
      <HeroLaptop />
      {/* <AboutLaptop /> */}
      <SkillsLaptop />
      <ProjectLaptop />
      <ClientProjectLaptop />
      <FooterLaptop />
    </div>
  );
};

export default LaptopPage;