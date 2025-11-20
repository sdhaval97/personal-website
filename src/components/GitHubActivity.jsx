import React, { useState, useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar'

const GitHubActivity = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const colorTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  const selectMonths = contributions => {
    const today = new Date();
    const monthsAgo = new Date();
    // Show 3 months on mobile, 6 months on desktop
    const monthsToShow = isMobile ? 3 : 6;
    monthsAgo.setMonth(today.getMonth() - monthsToShow);

    return contributions.filter(day => {
      const date = new Date(day.date);
      return date >= monthsAgo && date <= today;
    });
  };

  return (
    <div className="space-y-4 animate-fadeInUp">
      <h3 className="text-xl font-semibold text-white">GitHub Activity</h3>

      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 text-gray-300">
        <GitHubCalendar
          username="sdhaval97"
          blockSize={12}
          blockMargin={4}
          theme={colorTheme}
          fontSize={14}
          transformData={selectMonths}
        />
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-400 text-sm">Last {isMobile ? '3' : '6'} months of activity</span>
          <a
            href="https://github.com/sdhaval97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors text-sm underline"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  )
}

export default GitHubActivity