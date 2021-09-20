import React from 'react'

import { useLocalStorage, useSessionStorage } from '../src/useStorage'
import styles from '../styles/Home.module.css'

export default function StorageDemo () {
  const [job, setJob, storeActions] = useLocalStorage('job', 'developer')
  const [age, setAge, ageActions] = useLocalStorage('age', 24)
  const [name, setName, nameActions] = useSessionStorage('name', 'Arnold')

  return (
    <div>
      <p className={styles.description}>useLocalStorage</p>
      <div>
        {job ? <p>I work as a {job}</p> : <p>I'm looking for a job</p>}
        <button onClick={() => setJob('constructor')}>Set Job</button>
        <button onClick={() => storeActions.remove()}>Remove Job</button>
        <button onClick={() => storeActions.reset()}>Reset to default value</button>
      </div>

      <div>
        {age ? <p>I'm {age} years old</p> : <p>age is not specified</p>}
        <button onClick={() => setAge(Math.floor(Math.random() * 10) + 24)}>Set Age</button>
        <button onClick={() => ageActions.remove()}>Remove Age</button>
      </div>

      <div>
        <p>People call me {name} :)</p>
        <button onClick={() => setName('Linx')}>Set Session Name</button>
        <button onClick={() => nameActions.remove()}>Remove Session Name</button>
      </div>
    </div>
  )
}
