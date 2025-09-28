import React from 'react'
import GitHubActivity from './GitHubActivity'
import TechStack from './TechStack'

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Photo and About */}
          <div className="space-y-8">
            {/* Profile Photo */}
            <div className="relative group">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                <div className="w-full h-full bg-gray-700 flex items-center justify-center animate-pulse">
                  <svg className="w-32 h-32 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* About Me */}
            <div className="space-y-6 animate-fadeInUp">
              <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies.
                I love creating innovative solutions and turning ideas into beautiful, functional applications.
                With a strong foundation in both frontend and backend development, I thrive on solving
                complex problems and continuously learning new technologies.
              </p>
              <p className="text-gray-400 text-base">
                When I'm not coding, you can find me exploring new frameworks, contributing to open source,
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Tech Stack */}
            <TechStack />

            {/* GitHub Activity */}
            <GitHubActivity />
          </div>

          {/* Right Column - Main Content */}
          <div className="space-y-12">
            <div className="text-center lg:text-left space-y-6 animate-fadeInRight">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent animate-shimmer">
                  Your Name
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl">
                Full Stack Developer & Problem Solver
              </p>
              <p className="text-lg text-gray-400 max-w-2xl">
                Building scalable web applications with modern technologies and clean, efficient code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp">
              <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button className="group relative px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white hover:text-white">
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero