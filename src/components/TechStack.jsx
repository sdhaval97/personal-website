import React from 'react'

const TechStack = () => {
  const technologies = [
    {
      name: 'Python',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" fill="#3776ab"/>
        </svg>
      ),
      bgColor: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/20'
    },
    {
      name: 'SQL',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.134 2 5 3.79 5 6v12c0 2.21 3.134 4 7 4s7-1.79 7-4V6c0-2.21-3.134-4-7-4z" stroke="#336791" strokeWidth="2" fill="#336791" fillOpacity="0.3"/>
          <ellipse cx="12" cy="6" rx="7" ry="2" fill="#336791"/>
          <path d="M19 12c0 1.1-3.134 2-7 2s-7-.9-7-2" stroke="#336791" strokeWidth="2"/>
        </svg>
      ),
      bgColor: 'from-blue-600 to-indigo-600',
      shadowColor: 'shadow-indigo-500/20'
    },
    {
      name: 'React',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1c.86-.22 1.53-.54 2.01-.97c.44-.39.66-.88.66-1.41c0-.53-.22-1.02-.66-1.41c-.48-.43-1.15-.75-2.01-.97c-.04-.33-.07-.66-.07-1c0-.33.03-.66.07-.97c.86-.22 1.53-.54 2.01-.97c.44-.39.66-.88.66-1.41c0-.53-.22-1.02-.66-1.41c-.48-.43-1.15-.75-2.01-.97c.04-.32.07-.64.07-.97c0-1.77-1.79-3.2-4-3.2s-4 1.43-4 3.2c0 .33.03.65.07.97c-.86.22-1.53.54-2.01.97c-.44.39-.66.88-.66 1.41c0 .53.22 1.02.66 1.41c.48.43 1.15.75 2.01.97c-.04.33-.07.66-.07 1c0 .33.03.66.07.97c-.86.22-1.53.54-2.01.97c-.44.39-.66.88-.66 1.41c0 .53.22 1.02.66 1.41c.48.43 1.15.75 2.01.97" fill="#61DAFB"/>
        </svg>
      ),
      bgColor: 'from-cyan-500 to-blue-500',
      shadowColor: 'shadow-cyan-500/20'
    },
    {
      name: 'Power BI',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="14" width="3" height="6" fill="#F2C811" rx="1"/>
          <rect x="8" y="10" width="3" height="10" fill="#F2C811" rx="1"/>
          <rect x="12" y="6" width="3" height="14" fill="#F2C811" rx="1"/>
          <rect x="16" y="4" width="3" height="16" fill="#F2C811" rx="1"/>
        </svg>
      ),
      bgColor: 'from-yellow-500 to-orange-500',
      shadowColor: 'shadow-yellow-500/20'
    }
  ]

  return (
    <div className="space-y-6 animate-fadeInUp">
      <h3 className="text-xl font-semibold text-white">Tech Stack</h3>

      <div className="grid grid-cols-2 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className={`group relative flex flex-col items-center p-6 bg-gradient-to-br ${tech.bgColor} rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${tech.shadowColor} cursor-pointer`}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
            <div className="relative z-10 text-white mb-3 group-hover:scale-110 transition-transform duration-200">
              {tech.icon}
            </div>
            <span className="relative z-10 text-white font-semibold text-sm text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack