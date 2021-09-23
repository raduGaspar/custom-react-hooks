import React, { useState } from 'react'

import usePrevious from '../src/usePrevious'
import styles from '../styles/Home.module.css'

export default function PreviousDemo () {
  const randomBingoNumber = () => Math.floor(Math.random() * 90) + 1

  const [bingoNum, setBingoNum] = useState(randomBingoNumber())
  const previousBingoNum = usePrevious(bingoNum)

  return (
    <div>
      <p className={styles.hook}>usePrevious</p>
      <div className={styles.usage}>
        <pre>
          <code>
            {`output:

current  bingo number: ${bingoNum}
previous bingo number: ${previousBingoNum}`}
          </code>
        </pre>
        <button onClick={() => setBingoNum(randomBingoNumber())}>Set Random Bingo Number</button>
      </div>
    </div>
  )
}
