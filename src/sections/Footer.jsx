import React from "react";

function Footer() {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <div className="dark:text-white py-2 md:py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <h2 className="text-nowrap text-md md:text-lg p-2">
            Made by Vignesh 💞
          </h2>
          <h4 className="text-nowrap text-sm md:text-md p-2">
            ©{year} Vignesh A S. All rights reserved
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
