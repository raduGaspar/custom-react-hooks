import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import useArray from '../src/useArray'

export default function Home() {
  const [array, setArray, arrayActions] = useArray([...Array(10).keys()])
  const { push, removeAt, filter, pushAt, updateAt, clear, reset, sliceTo, sliceFrom } = arrayActions
  const getRandomNumber = () => Math.floor(Math.random() * 100)

  return (
    <div className={styles.container}>
      <Head>
        <title>Utilities: React Hooks</title>
        <meta name="description" content="A set of React Hooks that solve common problems when developing web applications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Custom React Hooks
        </h1>

        <p className={styles.description}>
          useArray
          <code className={styles.code}>{array.join(', ')}</code>
        </p>

        <div className={styles.grid}>
          <button onClick={() => push(getRandomNumber())}>Add Random Number 0 - 99</button>
          <button onClick={() => pushAt(1, getRandomNumber())}>Add random number at index 1</button>
          <button onClick={() => pushAt(0, getRandomNumber())}>Add random number at index 0</button>
          <button onClick={() => updateAt(1, 42)}>Change Second Element To 42</button>
          <button onClick={() => removeAt(1)}>Remove Second Element</button>
          <button onClick={() => filter(n => n%2===0)}>Keep Even Numbers</button>
          <button onClick={() => setArray([1, 2, 3, 4])}>Replace Array with [1, 2, 3, 4]</button>
          <button onClick={() => reset()}>Reset to default value</button>
          <button onClick={() => sliceTo(5)}>Slice to 5th element</button>
          <button onClick={() => sliceFrom(5)}>Slice from 5th element</button>
          <button onClick={clear}>Clear</button>
        </div>
      </main>
    </div>
  )
}
