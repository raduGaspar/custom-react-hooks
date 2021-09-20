import Head from 'next/head'

import styles from '../styles/Home.module.css'
import ToggleDemo from '../components/ToggleDemo'
import ArrayDemo from '../components/ArrayDemo'
import StorageDemo from '../components/StorageDemo'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Utilities: React Hooks</title>
        <meta name='description' content='A set of React Hooks that solve common problems when developing web applications' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Custom React Hooks</h1>

        <ArrayDemo />
        <ToggleDemo />
        <StorageDemo />
      </main>
    </div>
  )
}
