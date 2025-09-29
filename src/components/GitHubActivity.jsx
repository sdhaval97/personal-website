import React from 'react'

const GitHubActivity = () => {
  // Generate a simple activity calendar grid
  const generateCalendarData = () => {
    const weeks = []
    const today = new Date()
    const startDate = new Date(today.getFullYear(), 0, 1) // Start of year

    // Adjust to Sunday start
    const startSunday = new Date(startDate)
    startSunday.setDate(startDate.getDate() - startDate.getDay())

    for (let week = 0; week < 53; week++) {
      const weekData = []
      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(startSunday)
        currentDate.setDate(startSunday.getDate() + (week * 7) + day)

        // Random activity level for demo (you can replace with real data later)
        const level = Math.floor(Math.random() * 5)
        weekData.push({
          date: currentDate.toISOString().split('T')[0],
          level,
          count: level * Math.floor(Math.random() * 4)
        })
      }
      weeks.push(weekData)
    }
    return weeks
  }

  const weeks = generateCalendarData()

  const getLevelColor = (level) => {
    const colors = {
      0: 'bg-gray-800',
      1: 'bg-gray-600',
      2: 'bg-gray-500',
      3: 'bg-gray-400',
      4: 'bg-gray-300'
    }
    return colors[level] || 'bg-gray-800'
  }

  return (
    <div className="space-y-4 animate-fadeInUp">
      <h3 className="text-xl font-semibold text-white">GitHub Activity</h3>

      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 overflow-x-auto">
        {/* Month labels */}
        <div className="flex justify-start text-xs text-gray-500 mb-2 space-x-6">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
            <span key={month}>{index % 2 === 0 ? month : ''}</span>
          ))}
        </div>

        <div className="flex gap-1">
          {/* Weekday labels */}
          <div className="flex flex-col text-xs text-gray-500 pr-2">
            <div className="h-3 mb-1"></div>
            <div className="h-3 mb-1">Mon</div>
            <div className="h-3 mb-1"></div>
            <div className="h-3 mb-1">Wed</div>
            <div className="h-3 mb-1"></div>
            <div className="h-3 mb-1">Fri</div>
            <div className="h-3 mb-1"></div>
          </div>

          {/* Calendar grid */}
          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)} transition-all duration-200 hover:scale-125 hover:ring-1 hover:ring-gray-400 cursor-pointer`}
                    title={`${day.date}: ${day.count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
          <span>Less</span>
          <div className="flex gap-1 items-center">
            {[0, 1, 2, 3, 4].map(level => (
              <div key={level} className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`} />
            ))}
            <span className="ml-2">More</span>
          </div>
        </div>

        {/* Link to GitHub profile */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-400 text-sm">GitHub contribution activity</span>
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