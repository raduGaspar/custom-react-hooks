import React, { useState } from 'react'

import useStats from '../src/useStats'
import styles from '../styles/Home.module.css'

export default function StatsDemo () {
  const [state, setState] = useState(false)
  const stats = useStats('StatsDemo')

  return (
    <div>
      <p className={styles.hook}>useStats</p>
      <div className={styles.usage}>
        <code><pre>stats: {JSON.stringify(stats, null, 2)}</pre></code>
        <div className={styles.grid}>
          <button onClick={() => setState(!state)}>Change State</button>
        </div>
      </div>
    </div>
  )
}
