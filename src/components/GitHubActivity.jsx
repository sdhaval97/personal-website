import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const GitHubActivity = () => {
  const username = 'sdhaval97'

  return (
    <div className="space-y-4 animate-fadeInUp">
      <h3 className="text-xl font-semibold text-white">GitHub Activity</h3>

      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          theme={{
            level4: '#e6e6e6',
            level3: '#b3b3b3',
            level2: '#808080',
            level1: '#4d4d4d',
            level0: '#1a1a1a',
          }}
          style={{
            color: '#e5e7eb',
          }}
          fontSize={12}
          blockSize={12}
          blockMargin={3}
          showWeekdayLabels={true}
        />
      </div>
    </div>
  )
}

export default GitHubActivity