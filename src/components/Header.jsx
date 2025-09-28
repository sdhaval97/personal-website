import React from 'react'

const Header = () => {
  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white hover:text-gray-300 transition-colors duration-200">
              Your Name
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <a href="#about" className="text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-800/50">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-800/50">
                Projects
              </a>
              <a href="#experience" className="text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-800/50">
                Experience
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-800/50">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header