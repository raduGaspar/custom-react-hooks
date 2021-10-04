import { useRef, useEffect } from 'react'

const init = (componentName) => ({
  componentName,
  renders: 1,
  updatedAt: null,
  lastRendered: null
})

const useStats = (componentName = 'DefaultName', log = true) => {
  const { current: stats } = useRef(init(componentName))
  const now = +Date.now()

  useEffect(() => {
    stats.renders += 1
    stats.lastRendered = stats.updatedAt ? ((now - stats.updatedAt) / 1000).toFixed(2) : null
    stats.updatedAt = now
  })

  if (log) {
    console.group(`Stats: ${componentName}`)
    console.log(`Rendered: %c ${stats.renders} times `, 'background: #111; color: #0f0')
    console.log(`Last Rendered: %c${stats.lastRendered ? `${stats.lastRendered}s ago` : 'now'}`, 'color: #f00')
    console.log(JSON.stringify(stats, null, 2))
    console.groupEnd()
  }

  return stats
}

export default useStats
