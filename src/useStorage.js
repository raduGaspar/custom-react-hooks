import { useState, useEffect } from 'react'

const useStorage = (key, defaultValue, storageType) => {
  const [state, setState] = useState()

  const remove = _ => setState(undefined)
  const reset = _ => setState(defaultValue)

  // ensure initial state is executed AFTER mount
  useEffect(() => {
    try {
      const data = storageType.getItem(key)
      setState(data ? JSON.parse(data) : defaultValue)
    } catch (err) {
      setState(defaultValue)
    }
  }, [])

  useEffect(() => {
    if (state === undefined) {
      return storageType.removeItem(key)
    }

    try {
      storageType.setItem(key, JSON.stringify(state))
    } catch (err) {
      console.warn(`useStorage:: Failed to set "${key}" as "${state}" in storage`)
    }
  }, [key, state, storageType])

  return [state, setState, { reset, remove }]
}

export function useLocalStorage (key, defaultValue) {
  return useStorage(key, defaultValue, typeof window !== 'undefined' ? window.localStorage : null)
}

export function useSessionStorage (key, defaultValue) {
  return useStorage(key, defaultValue, typeof window !== 'undefined' ? window.sessionStorage : null)
}
