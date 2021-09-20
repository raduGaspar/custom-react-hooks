import React from 'react'

import useToggle from '../src/useToggle'

export default function ToggleDemo () {
  const [toggle, setToggle] = useToggle(false)

  return (
    <div>
      <input type='checkbox' onChange={setToggle} checked={toggle} />
      <button onClick={() => setToggle(true)}>Check</button>
      <button onClick={() => setToggle(false)}>Uncheck</button>
    </div>
  )
}
