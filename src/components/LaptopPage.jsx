import React from "react";
import HeroLaptop from "./laptop/HeroLaptop";
import AboutLaptop from "./laptop/AboutLaptop";
import EducationLaptop from "./laptop/EducationLaptop";
import ProjectLaptop from "./laptop/ProjectLaptop";
import ContactLaptop from "./laptop/ContactLaptop";
import FooterLaptop from "./laptop/FooterLaptop";
import ScrollLaptop from "./laptop/ScrollLaptop";

const LaptopPage = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <ScrollLaptop />
      <HeroLaptop />
      <AboutLaptop />
      <EducationLaptop />
      <ProjectLaptop />
      <ContactLaptop />
      <FooterLaptop />
    </div>
  );
};

export default LaptopPage;