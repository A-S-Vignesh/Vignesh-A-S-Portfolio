import React, { useEffect } from "react";

function Footer() {
  const year = new Date().getFullYear();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js";
    script.setAttribute("data-name", "bmc-button");
    script.setAttribute("data-slug", "a_s_vignesh");
    script.setAttribute("data-color", "#0ea5e9");
    script.setAttribute("data-emoji", "☕");
    script.setAttribute("data-font", "Cookie");
    script.setAttribute("data-text", "Buy me a coffee");
    script.setAttribute("data-outline-color", "#000000");
    script.setAttribute("data-font-color", "#000000");
    script.setAttribute("data-coffee-color", "#FFDD00");
    script.async = true;

    const container = document.getElementById("bmc-button-container");
    if (container) {
      container.innerHTML = ""; // clear if script already added
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="dark:text-white py-2 md:py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <h2 className="text-nowrap text-md md:text-lg p-2">
            Made by Vignesh 💞
          </h2>
          <div className="text-center md:text-right p-2">
            <h4 className="text-nowrap text-sm md:text-md mb-1">
              ©{year} Vignesh A S. All rights reserved.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
