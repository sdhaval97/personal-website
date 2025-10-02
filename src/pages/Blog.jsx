import React from 'react'

const blogPosts = [
  {
    id: 1,
    title: "How I Built an AI-Powered App to Solve the \"What's for Dinner?\" Problem",
    description: 'From staring at a fridge full of random ingredients to building an AI-powered recipe app.',
    date: 'August 23, 2025',
    thumbnail: '/images/blog/post1.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/how-i-built-an-ai-powered-app-to'
  },
  {
    id: 2,
    title: 'The 5-Step Journaling System for Intentional Growth',
    description: 'A simple and intentional journaling method to help you grow one page at a time.',
    date: 'June 26, 2025',
    thumbnail: '/images/blog/post2.jpg',
    substackUrl: 'https://open.substack.com/pub/dhavalshah/p/the-5-step-journaling-system-for'
  },
  {
    id: 3,
    title: 'How to Use Journaling to Turn Frustration Into Fuel',
    description: 'A simple writing system to turn emotional chaos into clear, focused action.',
    date: 'June 19, 2025',
    thumbnail: '/images/blog/post3.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/how-to-use-journaling-to-turn-frustration'
  },
  {
    id: 4,
    title: 'How to Rebuild Self-Trust in 5 Minutes a Day',
    description: '(Even if you’ve spent years second-guessing yourself)',
    date: 'June 12, 2025',
    thumbnail: '/images/blog/post4.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/how-to-rebuild-self-trust-in-5-minutes'
  },
  {
    id: 5,
    title: '5 Ways Journaling Helps Me Meet Myself (Even on the Hard Days)',
    description: "Here's how writing became my most honest mirror and decision-making tool.",
    date: 'June 5, 2025',
    thumbnail: '/images/blog/post5.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/5-ways-journaling-helps-me-meet-myself'
  },
  {
    id: 6,
    title: '5 Corporate Skills That Make You a Natural Distance Runner',
    description: 'From boardroom to finish line: Why your office skills make you a natural runner.',
    date: 'March 14, 2025',
    thumbnail: '/images/blog/post6.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/5-corporate-skills-that-make-you'
  },
  {
    id: 7,
    title: '7 Ways to Stay Motivated During Long-Term Learning Goals',
    description: 'How can we stay motivated to achieve long-term learning goals amidst busy schedules and constant distractions?',
    date: 'July 21, 2024',
    thumbnail: '/images/blog/post7.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/7-ways-to-stay-motivated-during-long'
  },
  {
    id: 8,
    title: 'Taking Back Control: Simple Steps to Mindful Screen Time',
    description: "Let's face it: we spend a lot of time on our phones. It's time to admit it and think about how it might be affecting us.",
    date: 'February 17, 2024',
    thumbnail: '/images/blog/post8.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/taking-back-control-simple-steps'
  },
  {
    id: 9,
    title: 'Calm, Clear, and Collected: The Morning Meditation Revolution',
    description: "So, I've been giving meditation a try for about 3-4 weeks now, and one routine has become a rockstar in my daily life.",
    date: 'November 14, 2023',
    thumbnail: '/images/blog/post9.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/calm-clear-and-collected-the-morning'
  },
  {
    id: 10,
    title: '3 Essential Home Workouts to Elevate Your Physical Fitness',
    description: 'Planning out a workout routine can be thrilling and motivating, but the real challenge is putting that plan into action.',
    date: 'November 9, 2023',
    thumbnail: '/images/blog/post10.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/3-essential-home-workouts-to-elevate'
  },
  {
    id: 11,
    title: '10 Proven Ways to Ensure a Life of Misery',
    description: "While most of us aim for happiness, let's switch gears and look at how to master the art of living miserably.",
    date: 'November 4, 2023',
    thumbnail: '/images/blog/post11.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/10-proven-ways-to-ensure-a-life-of'
  },
  {
    id: 12,
    title: 'Ego: Friend or Foe? Navigating the Self in the Pursuit of Growth',
    description: "I'd like to delve into my personal journey of coming to terms with my ego and the revelations that ensued.",
    date: 'October 28, 2023',
    thumbnail: '/images/blog/post12.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/ego-friend-or-foe-navigating-the'
  },
  {
    id: 13,
    title: '3 Reasons to Start Journaling Now!',
    description: 'Writing down your thoughts and emotions is probably one of the most underrated activities.',
    date: 'July 20, 2022',
    thumbnail: '/images/blog/post13.jpg',
    substackUrl: 'https://dhavalshah.substack.com/p/3-reasons-to-start-journaling-now'
  }
]

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp">
            Exploring tech, fitness, and personal development through stories and lessons learned
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.substackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 hover:scale-105 transition-all duration-300 animate-fadeInUp group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="text-sm text-gray-500">
                {post.date}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog