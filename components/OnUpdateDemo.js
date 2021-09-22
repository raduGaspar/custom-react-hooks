import React, { useState } from 'react'

import useOnUpdate from '../src/useOnUpdate'
import styles from '../styles/Home.module.css'

export default function OnUpdateDemo () {
  const [city, setCity] = useState('New York')

  useOnUpdate(() => console.log('city was updated'), [city])

  return (
    <div>
      <p className={styles.description}>useOnUpdate</p>
      <p>I live in {city}</p>
      <button onClick={() => setCity('Los Angeles')}>Change City</button>
    </div>
  )
}
