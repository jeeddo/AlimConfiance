import React from 'react'

export default function useDebounce(
  cb: Function,
  delay: number = 600,
  ...deps: React.DependencyList
): void {
  React.useEffect(() => {
    const timeoutId = window.setTimeout(() => cb(), delay)
    return () => clearTimeout(timeoutId)
  }, [delay, cb, ...deps])
}
