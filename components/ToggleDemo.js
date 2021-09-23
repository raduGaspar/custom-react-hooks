import React from 'react'

import useToggle from '../src/useToggle'
import styles from '../styles/Home.module.css'

export default function ToggleDemo () {
  const [toggle, setToggle] = useToggle(false)

  return (
    <div>
      <p className={styles.hook}>useToggle</p>
      <div className={styles.usage}>
        <code>checked: {toggle.toString()}</code>
        <label htmlFor='toggle-checkbox'>
          <input id='toggle-checkbox' type='checkbox' onChange={setToggle} checked={toggle} />
          click to toggle
        </label>

        <div className={styles.grid}>
          <button onClick={() => setToggle(true)}>Check</button>
          <button onClick={() => setToggle(false)}>Uncheck</button>
        </div>
      </div>
    </div>
  )
}
