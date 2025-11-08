import { useState, useCallback, useEffect } from 'react'

export interface Ripple {
  id: number
  x: number
  y: number
}

export function useCursorRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const rippleIdRef = { current: 0 }

  const addRipple = useCallback((x: number, y: number) => {
    const id = rippleIdRef.current++
    const newRipple: Ripple = { id, x, y }

    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation completes (600ms)
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
    }, 600)
  }, [])

  const handleClick = useCallback(
    (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY)
    },
    [addRipple]
  )

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return { ripples }
}
