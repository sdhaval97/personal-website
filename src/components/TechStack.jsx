import React from 'react'

const TechStack = () => {
  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Power BI', icon: '📊' }
  ]

  return (
    <div className="space-y-6 animate-fadeInUp">
      <h3 className="text-xl font-semibold text-white">Tech Stack</h3>

      <div className="grid grid-cols-2 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center p-4 bg-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
              {tech.icon}
            </div>
            <span className="text-gray-300 font-medium text-sm text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack