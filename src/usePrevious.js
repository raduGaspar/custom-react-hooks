import { useRef } from 'react'

const usePrevious = value => {
  const latestRef = useRef(value)
  const priorRef = useRef()

  if (latestRef.current !== value) {
    priorRef.current = latestRef.current
    latestRef.current = value
  }

  return priorRef.current
}

export default usePrevious
