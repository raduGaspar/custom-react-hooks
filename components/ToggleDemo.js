import React from 'react'

import useToggle from '../src/useToggle'
import styles from '../styles/Home.module.css'

export default function ToggleDemo () {
  const [toggle, setToggle] = useToggle(false)

  return (
    <div>
      <p className={styles.description}>useToggle</p>
      <input type='checkbox' onChange={setToggle} checked={toggle} />
      <button onClick={() => setToggle(true)}>Check</button>
      <button onClick={() => setToggle(false)}>Uncheck</button>
    </div>
  )
}
