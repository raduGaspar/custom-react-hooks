import React from 'react'

import { useLocalStorage, useSessionStorage } from '../src/useStorage'
import styles from '../styles/Home.module.css'

export default function StorageDemo () {
  const [job, setJob, storeActions] = useLocalStorage('job', 'developer')
  const [age, setAge, ageActions] = useLocalStorage('age', 24)
  const [name, setName, nameActions] = useSessionStorage('name', 'Arnold')

  return (
    <div>
      <p className={styles.hook}>useLocalStorage</p>
      <div className={styles.usage}>
        <div>
          <code>output: {job ? `I work as a ${job}` : 'I\'m looking for a job'}</code>

          <div className={styles.grid}>
            <button onClick={() => setJob('constructor')}>Set Job</button>
            <button onClick={() => storeActions.remove()}>Remove Job</button>
            <button onClick={() => storeActions.reset()}>Reset to default value</button>
          </div>
        </div>

        <div>
          <code>output: {age ? `I'm ${age} years old` : 'age is not specified'}</code>
          <div className={styles.grid}>
            <button onClick={() => setAge(Math.floor(Math.random() * 10) + 24)}>Set Age</button>
            <button onClick={() => ageActions.remove()}>Remove Age</button>
          </div>
        </div>

        <div>
          <code>output: {name ? `People call me ${name} :)` : 'I am nameless 👀'}</code>
          <div className={styles.grid}>
            <button onClick={() => setName('Linx')}>Set Session Name</button>
            <button onClick={() => nameActions.remove()}>Remove Session Name</button>
          </div>
        </div>
      </div>
    </div>
  )
}
