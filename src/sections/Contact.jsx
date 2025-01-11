import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="container mx-auto max-w-4xl bg-custom-blue shadow-custom-dark dark:bg-custom-darkblue dark:shadow-custom-light rounded-lg p-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            I’d love to hear from you! Fill out the form below, and I’ll get
            back to you as soon as possible.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 block w-full px-4 py-2 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border rounded-md focus:ring focus:ring-sky-300 dark:focus:ring-sky-600 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full px-4 py-2 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border rounded-md focus:ring focus:ring-sky-300 dark:focus:ring-sky-600 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="mt-2 block w-full px-4 py-2 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border rounded-md focus:ring focus:ring-sky-300 dark:focus:ring-sky-600 focus:outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-md shadow-md transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
            <p>
              Or reach out directly via email:{" "}
              <a
                href="mailto:a.s.vignesh.work@gmail.com"
                className="text-sky-500 hover:underline"
              >
                a.s.vignesh.work@gmail.com
              </a>
            </p>
            <p className="mt-2">
              Or connect with me on{" "}
              <a
                href="https://linkedin.com/in/A-S-Vignesh"
                className="text-sky-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
