import React from 'react'

const GitHubActivity = () => {
  // Generate mock GitHub activity data
  const generateActivityData = () => {
    const data = []
    const today = new Date()

    for (let i = 364; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)

      // Random activity level (0-4)
      const level = Math.floor(Math.random() * 5)
      data.push({
        date: date.toISOString().split('T')[0],
        level: level,
        count: level * Math.floor(Math.random() * 5)
      })
    }
    return data
  }

  const activityData = generateActivityData()

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

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <div className="space-y-4 animate-fadeInUp">
      <h3 className="text-xl font-semibold text-white">GitHub Activity</h3>

      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
        {/* Month labels */}
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          {months.map((month, index) => (
            <span key={index} className={index % 2 === 0 ? 'opacity-100' : 'opacity-0'}>
              {month}
            </span>
          ))}
        </div>

        {/* Activity grid */}
        <div className="grid grid-cols-53 gap-1 mb-4">
          {activityData.map((day, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)} transition-all duration-200 hover:scale-125 hover:ring-2 hover:ring-gray-400 group cursor-pointer`}
              title={`${day.date}: ${day.count} contributions`}
            >
              <div className="opacity-0 group-hover:opacity-100 absolute z-10 bg-gray-800 text-white text-xs p-2 rounded shadow-lg -mt-8 transform -translate-x-1/2 transition-opacity duration-200 pointer-events-none">
                {day.count} contributions on {day.date}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map(level => (
              <div key={level} className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`} />
            ))}
          </div>
          <span>More</span>
        </div>

        {/* Stats */}
        <div className="mt-4 flex justify-between text-sm">
          <span className="text-gray-400">
            {activityData.filter(d => d.level > 0).length} days active this year
          </span>
          <span className="text-gray-400">
            {activityData.reduce((sum, d) => sum + d.count, 0)} total contributions
          </span>
        </div>
      </div>
    </div>
  )
}

export default GitHubActivity