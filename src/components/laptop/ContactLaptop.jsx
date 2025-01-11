import React from "react";

function ContactLaptop() {
  return (
    <div id="contactme" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-8">
          <h2 className="text-3xl font-bold text-yellow-500 dark:text-yellow-400 text-center py-6">
            Contact Me
          </h2>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-6">
            I would love to hear from you! Feel free to reach out for
            collaborations or just to say hi.
          </p>
          <form
            action="https://formspree.io/f/example" // Replace with your Formspree endpoint
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="input-field bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="input-field bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="input-field bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            ></textarea>
            <button
              type="submit"
              className="btn-primary w-full md:w-auto mx-auto block"
            >
              Send Message
            </button>
          </form>
          <div className="flex justify-center items-center space-x-6 mt-6">
            {/* Social Media Links */}
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
                className="hover:scale-110 transition-transform filter dark:invert dark:brightness-75"
              >
                <img src={icon} alt="Social Icon" className="w-12 h-12" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactLaptop;
