import React, { useState } from 'react'

import useOnUpdate from '../src/useOnUpdate'
import styles from '../styles/Home.module.css'

export default function OnUpdateDemo () {
  const [city, setCity] = useState('New York')

  useOnUpdate(() => console.log('city was updated'), [city])

  return (
    <div>
      <p className={styles.hook}>useOnUpdate</p>
      <div className={styles.usage}>
        <code>{`I live in ${city}`}</code>
        <button onClick={() => setCity('Los Angeles')}>Change City</button>
      </div>
    </div>
  )
}
