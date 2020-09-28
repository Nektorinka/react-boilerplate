import { useState } from 'react'

const useDebounce = (cb: Function, delay = 0) => {
  const [timeoutId, setTimeoutId] = useState<number>()

  return (...args: any[]) => {
    clearTimeout(timeoutId)

    setTimeoutId(
      window.setTimeout(() => {
        cb(...args)
      }, delay),
    )
  }
}

export default useDebounce
