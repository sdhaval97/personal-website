import React from 'react'
import GitHubActivity from './GitHubActivity'
import TechStack from './TechStack'
import profileImage from '../assets/profile.jpeg'

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Fold: Image on left, Intro on right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 lg:mb-24">
          {/* Left: Profile Photo */}
          <div className="relative group mx-auto lg:mx-0 animate-fadeInUp w-full max-w-sm sm:max-w-md md:max-w-xs xl:max-w-sm">
            {/* Aspect ratio container for the image */}
            <div className="relative pt-[100%] rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 mb-8"> {/* Added mb-8 here for spacing */}
              {/* Actual image or placeholder */}
              <img
                src={profileImage}
                alt="Dhaval"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* If you prefer a placeholder, use this instead of the <img> tag */}
              {/*
              <div className="absolute inset-0 w-full h-full bg-gray-700 flex items-center justify-center">
                <svg className="w-32 h-32 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              */}
            </div>
          </div>

          {/* Right: Intro and CTAs */}
          <div className="text-center lg:text-left animate-fadeInRight">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Dhaval
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mt-4">
              Full Stack Developer & Problem Solver
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mt-2">
              Building scalable web applications with modern technologies and clean, efficient code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <a
                href="/projects"
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
              >
                <span className="relative z-10">View My Work</span>
              </a>
              <a
                href="/Dhaval_Shah_CV.pdf"
                download="Dhaval_Shah_CV.pdf"
                className="group relative px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white hover:text-white text-center"
              >
                <span className="relative z-10">Download CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Fold: About on left, Skills on right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Expanded About Me */}
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and turning ideas into beautiful, functional applications. With a strong foundation in both frontend and backend development, I thrive on solving complex problems and continuously learning new technologies.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              My goal is to build software that is not only scalable and efficient but also provides a seamless user experience. I believe in the power of collaboration and am always eager to work with a team to bring ambitious projects to life.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-4">Core Competencies:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong className="font-bold text-white">Full-Stack Development:</strong> Crafting responsive front-end interfaces with React and building robust, scalable back-end systems with Node.js and Python.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong className="font-bold text-white">Database Management:</strong> Designing and managing efficient SQL and NoSQL database schemas to ensure data integrity and performance.</span>
                </li>
                 <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong className="font-bold text-white">Problem Solving:</strong> Deconstructing complex challenges into manageable components and implementing clean, maintainable solutions.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Tech Stack & GitHub */}
          <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <TechStack />
            <GitHubActivity />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero