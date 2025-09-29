import React from 'react'

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp">
            Thoughts, insights, and experiences from my journey in tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog post cards will go here */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 animate-fadeInUp">
            <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-400 mb-4">Blog posts will be added here soon. Stay tuned for insights on web development, tech trends, and more.</p>
            <div className="text-sm text-gray-500">
              Date coming soon
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog