import React, { useState } from 'react'

import useOnUpdate from '../src/useOnUpdate'
import styles from '../styles/Home.module.css'

const cities = ['New York', 'Los Angeles', 'Vienna', 'Paris', 'Rome', 'Tokyo']

export default function OnUpdateDemo () {
  const [city, setCity] = useState(0)

  useOnUpdate(() => console.log('city was updated'), [city])

  return (
    <div>
      <p className={styles.hook}>useOnUpdate</p>
      <div className={styles.usage}>
        <code>{`I live in ${cities[city]}`}</code>
        <button onClick={() => setCity((city + 1) % cities.length)}>Change City</button>
      </div>
    </div>
  )
}
