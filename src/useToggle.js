import { useState } from 'react'

const useToggle = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue)

  const toggleState = value => setState(typeof value === 'boolean' ? value : !state)

  return [state, toggleState]
}

export default useToggle
