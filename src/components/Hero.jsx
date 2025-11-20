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
              Data & BI Analyst | Web Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mt-2">
              Transforming data into actionable insights and building modern web applications with React.
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
              I'm a Data & BI Analyst with a passion for uncovering insights from complex datasets and creating impactful visualizations. With extensive experience in data analysis, reporting, and business intelligence, I help organizations make data-driven decisions. I'm also expanding my skills in web development, building modern applications with React.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              My goal is to bridge the gap between data and technology, creating solutions that are both analytically sound and user-friendly. I believe in continuous learning and am always exploring new tools and technologies to enhance my skill set.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-4">Core Competencies:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong className="font-bold text-white">Data Analysis & Business Intelligence:</strong> Extracting insights from complex datasets, creating interactive dashboards, and delivering actionable reports that drive business decisions.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong className="font-bold text-white">Data Visualization & Reporting:</strong> Designing compelling visualizations and reports using modern BI tools to communicate complex data stories effectively.</span>
                </li>
                 <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong className="font-bold text-white">Web Development:</strong> Building responsive and modern web applications using React, with a focus on clean code and user experience.</span>
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