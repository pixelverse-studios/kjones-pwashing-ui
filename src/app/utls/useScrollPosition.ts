import { useEffect, useState, useCallback } from 'react'

const useScrollPosition = (hidePosition: number) => {
  const [isShowing, setIsShowing] = useState(true)

  const listenToScroll = useCallback(() => {
    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop
    if (scrollPosition > hidePosition) {
      isShowing && setIsShowing(false)
    } else {
      setIsShowing(true)
    }
  }, [isShowing, setIsShowing])

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll, true)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])
  return isShowing
}

export default useScrollPosition
