import React from 'react'

export default function useDebounce(
  cb: (...args: unknown[]) => unknown,
  delay: number = 600,
  ...deps: React.DependencyList
): void {
  React.useEffect(() => {
    const timeoutId = window.setTimeout(cb, delay)
    return () => clearTimeout(timeoutId)
    // eslint-disable-next-line
  }, [delay, cb, ...deps])
}
