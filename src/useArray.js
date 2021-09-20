import { useState } from 'react'

const useArray = (defaultValue = []) => {
  const [array, setArray] = useState(defaultValue)

  const push = el => setArray([...array, el])

  const pushAt = (idx, el) => {
    setArray([
      ...array.slice(0, idx),
      el,
      ...array.slice(idx)
    ])
  }

  const updateAt = (idx, el) => {
    setArray([
      ...array.slice(0, idx),
      el,
      ...array.slice(idx + 1)
    ])
  }

  const filter = cb => setArray(array.filter(cb))

  const removeAt = idx => setArray([
    ...array.slice(0, idx),
    ...array.slice(idx + 1)
  ])

  const clear = _ => setArray([])
  const sliceTo = idx => setArray([...array.slice(0, idx)])
  const sliceBetween = (from, to) => setArray([...array.slice(from, to)])
  const sliceFrom = idx => setArray([...array.slice(idx)])
  const reset = _ => setArray(defaultValue)

  return [array, setArray, { push, pushAt, updateAt, filter, removeAt, reset, clear, sliceTo, sliceFrom, sliceBetween }]
}

export default useArray
