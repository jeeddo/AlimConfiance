import { MAX_MOBILE_DEVICES_WIDTH } from '../utils-lib/constants'
import { useEffect, useState } from 'react'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= MAX_MOBILE_DEVICES_WIDTH) setIsMobile(true)
      else setIsMobile(false)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return isMobile
}
