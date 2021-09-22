import { useEffect, useRef } from 'react'

const useOnUpdate = (callback, dependencies) => {
  const isFirstRenderRef = useRef(true)

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false
      return
    }

    return callback()
  }, dependencies)
}

export default useOnUpdate
