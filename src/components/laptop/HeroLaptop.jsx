import React from 'react'

function HeroLaptop() {
  return (
    <section id="hero" className="bg-gray-50 py-12 dark:bg-gray-800">
      <div className="max-w-screen-xl h-full lg:h-[500px] mx-auto px-2 md:px-8 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-left space-y-4">
          <h2 className="text-6xl md:text-4xl font-semibold">Hi There, I am</h2>
          <h1 className="text-7xl md:text-6xl font-bold text-yellow-500 dark:text-yellow-400">
            Vignesh A S
          </h1>
          <h3 className="text-6xl md:text-4xl">A Web Developer</h3>
          <div className="flex space-x-4">
            <a href="#aboutme" className="btn btn-warning btn-lg text-2xl">
              About me
            </a>
            <a
              href="images/Vignesh-Resume.pdf"
              download="Vignesh-Resume.pdf"
              className="btn btn-primary btn-lg text-2xl"
            >
              Resume
            </a>
          </div>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons */}
            {[
              { src: "images/svg/facebook-round.svg", link: "#" },
              {
                src: "images/svg/github-round.svg",
                link: "https://github.com/Halo-One/",
              },
              {
                src: "images/svg/linkedin-round.svg",
                link: "https://www.linkedin.com/in/a-s-vignesh/",
              },
            ].map(({ src, link }) => (
              <a key={src} href={link} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt="Social Icon"
                  className="w-12 h-12 filter dark:invert dark:brightness-75 transition-transform hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="images/main-image.png"
            alt="Main Visual"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroLaptop