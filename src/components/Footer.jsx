import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500">
              © 2024 Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-200 hover:scale-105 transform">
              GitHub
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-200 hover:scale-105 transform">
              LinkedIn
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-200 hover:scale-105 transform">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer