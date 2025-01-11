import React from 'react'

function FooterLaptop() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Branding */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Vignesh A S</h3>
            <p className="text-sm">Web Developer | Portfolio Website</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            {[
              { icon: "images/svg/facebook-round.svg", link: "#" },
              {
                icon: "images/svg/github-round.svg",
                link: "https://github.com/Halo-One/",
              },
              {
                icon: "images/svg/linkedin-round.svg",
                link: "https://www.linkedin.com/in/a-s-vignesh/",
              },
            ].map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={icon}
                  alt="Social Icon"
                  className="w-8 h-8 filter dark:invert dark:brightness-75"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="text-center mt-4 text-sm">
          © {new Date().getFullYear()} Vignesh A S. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default FooterLaptop