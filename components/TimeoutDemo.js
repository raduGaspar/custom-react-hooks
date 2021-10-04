import React, { useState } from 'react'

import useTimeout from '../src/useTimeout'
import styles from '../styles/Home.module.css'

export default function TimeoutDemo () {
  const [state, setState] = useState(false)
  const [isClear, clearTimeoutRef] = useTimeout(() => {
    setState(true)
  }, 3000)

  return (
    <div>
      <p className={styles.hook}>useTimeout</p>
      <div className={styles.usage}>
        <code>is timeout cleared: {isClear.toString()}</code>
        <p>Content will be displayed in 3 seconds, unless timeout is cleared 😁</p>
        {state && <p>This took 3 seconds to display 😎</p>}

        {
          !isClear
            ? (
              <div className={styles.grid}>
                <button onClick={clearTimeoutRef}>Clear Timeout</button>
              </div>
              )
            : <p>timeout is cleared</p>
        }
      </div>
    </div>
  )
}
