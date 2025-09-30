import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const GitHubActivity = () => {
  const colorTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  const selectLastSixMonths = contributions => {
    const today = new Date();
    const sixMonthsAgo = new Date();
    // Go back 6 months from today
    sixMonthsAgo.setMonth(today.getMonth() - 6);

    return contributions.filter(day => {
      const date = new Date(day.date);
      return date >= sixMonthsAgo && date <= today;
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
          transformData={selectLastSixMonths}
        />
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-400 text-sm">Last 6 months of activity</span>
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