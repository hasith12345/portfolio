import { useState, useEffect, useRef } from 'react'

export interface CursorPosition {
  x: number
  y: number
}

export function useCursorFollower() {
  const [circlePosition, setCirclePosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const mousePos = useRef({ x: 0, y: 0 })
  const circlePos = useRef({ x: 0, y: 0 })
  const dotPos = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const animate = () => {
      // Circle follows cursor directly (faster - 0.15 lerp)
      circlePos.current.x += (mousePos.current.x - circlePos.current.x) * 0.15
      circlePos.current.y += (mousePos.current.y - circlePos.current.y) * 0.15

      // Dot follows the circle (slower - 0.1 lerp), so it trails behind inside the circle
      dotPos.current.x += (circlePos.current.x - dotPos.current.x) * 0.1
      dotPos.current.y += (circlePos.current.y - dotPos.current.y) * 0.1

      setCirclePosition({
        x: circlePos.current.x,
        y: circlePos.current.y,
      })

      setDotPosition({
        x: dotPos.current.x,
        y: dotPos.current.y,
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return { circlePosition, dotPosition, isVisible }
}
