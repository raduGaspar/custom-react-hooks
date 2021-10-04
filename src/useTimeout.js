import { useState, useCallback, useRef, useEffect } from 'react'

const useTimeout = (callback, delay, clearOnUnmount = true) => {
  const timeout = useRef()
  const cb = useRef(callback)
  const [isClear, setIsClear] = useState(false)

  const clear = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current)
      setIsClear(true)
    }
  }, [])

  // update the cb reference if 'callback' changes
  useEffect(() => {
    if (typeof callback === 'function') {
      cb.current = callback
    }
  }, [callback])

  // reset the timeout if 'delay' changes
  useEffect(() => {
    if (typeof delay === 'number') {
      timeout.current = setTimeout(() => {
        cb.current()
      }, delay)
    }

    return clear
  }, [delay])

  // clear the timeout on unmount
  useEffect(() => () => {
    if (clearOnUnmount) {
      clear()
    }
  }, [])

  return [isClear, clear]
}

export default useTimeout
