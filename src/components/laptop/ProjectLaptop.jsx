import React from 'react'

function ProjectLaptop() {
      const projectData = [
    {
      title: "Blog-GPT",
      description:
        "A platform where users can write blogs and generate content using AI. Integrated Google Gemini AI for text generation and Google OAuth for secure authentication.",
      techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Google Gemini AI"],
      link: "https://the-blog-gpt.vercel.app",
      image: "images/projects/blog-gpt.png", // Replace with actual image path
    },
    {
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce platform with React front-end, Express.js back-end, and MongoDB database for storing user and product data.",
      techStack: ["React", "Express.js", "MongoDB", "Redux"],
      link: "#",
      image: "images/projects/ecommerce.png", // Replace with actual image path
    },
    {
      title: "Rain Animation",
      description:
        "A canvas-based animation project where raindrops fall at a slanting angle for a realistic effect. Built with React and canvas API.",
      techStack: ["React", "Canvas API"],
      link: "#",
      image: "images/projects/rain-animation.png", // Replace with actual image path
    },
  ];

    return (
        <div id="projects" className="w-full bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-yellow-500 dark:text-yellow-400 text-center">Projects</h2>
                <p className="text-lg text-center text-gray-700 dark:text-gray-300 mt-4">
                    Here are some of my recent projects showcasing my skills and expertise.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    {project.description}
                                </p>
                                <div className="mt-4">
                                    <h4 className="text-yellow-500 dark:text-yellow-400 font-medium">Tech Stack:</h4>
                                    <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
                                        {project.techStack.map((tech, idx) => (
                                            <li key={idx}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-6 btn-primary"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectLaptop