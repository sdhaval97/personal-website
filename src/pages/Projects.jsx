import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Gomati Ecopack",
      description: "A professional business website for a packaging company, featuring modern design and responsive layout",
      tech: ["React", "Tailwind CSS", "Vite"],
      status: "Live",
      bgColor: "from-green-500 to-teal-600",
      link: "https://www.gomatiecopack.com/"
    },
    {
      title: "Personal Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      tech: ["React", "Tailwind CSS", "Vite"],
      status: "In Development",
      bgColor: "from-blue-500 to-purple-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp">
            A showcase of my work and the technologies I love working with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.bgColor} rounded-lg mb-4 flex items-center justify-center`}>
                <div className="text-white/80 text-lg font-semibold">
                  {project.title}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{project.status}</span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Placeholder for more projects */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border-2 border-dashed border-gray-600 flex flex-col items-center justify-center text-center min-h-[300px] animate-fadeInUp">
            <div className="text-gray-500 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2">More Projects Coming</h3>
            <p className="text-gray-500">I'm constantly working on new projects. Check back soon!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects