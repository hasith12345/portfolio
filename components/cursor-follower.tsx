"use client"

import { useEffect, useRef, useState } from "react"

function useCursorFollower() {
  const [circlePosition, setCirclePosition] = useState({ x: -9999, y: -9999 })
  const [dotPosition, setDotPosition] = useState({ x: -9999, y: -9999 })
  const [isVisible, setIsVisible] = useState(false)

  const rafRef = useRef<number | null>(null)
  const targetRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      setCirclePosition({ x, y })
      targetRef.current = { x, y }
      setIsVisible(true)

      if (rafRef.current == null) {
        const loop = () => {
          setDotPosition((prev) => {
            const tx = targetRef.current.x
            const ty = targetRef.current.y
            const nx = prev.x + (tx - prev.x) * 0.2
            const ny = prev.y + (ty - prev.y) * 0.2
            return { x: nx, y: ny }
          })
          rafRef.current = requestAnimationFrame(loop)
        }
        rafRef.current = requestAnimationFrame(loop)
      }
    }

    const onLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseenter", onMove)
    window.addEventListener("mouseleave", onLeave)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseenter", onMove)
      window.removeEventListener("mouseleave", onLeave)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return { circlePosition, dotPosition, isVisible }
}

export function CursorFollower() {
  const { circlePosition, dotPosition, isVisible } = useCursorFollower()

  return (
    <>
      <style>{`
        .cursor-circle {
          position: fixed;
          pointer-events: none;
          width: 40px;
          height: 40px;
          border: 0.5px solid var(--primary);
          border-radius: 50%;
          left: 0;
          top: 0;
          transform: translate(-50%, -50%);
          z-index: 9998;
          transition: opacity 0.3s ease-out;
        }

        .cursor-circle.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .cursor-dot {
          position: fixed;
          pointer-events: none;
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          left: 0;
          top: 0;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: opacity 0.3s ease-out;
          box-shadow: 0 0 8px color-mix(in srgb, var(--primary) 60%, transparent);
        }

        .cursor-dot.hidden {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>


      {/* Circle outline - follows cursor */}
      <div
        className={`cursor-circle ${!isVisible ? 'hidden' : ''}`}
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`,
        }}
      />

      {/* Center dot - follows the circle */}
      <div
        className={`cursor-dot ${!isVisible ? 'hidden' : ''}`}
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
        }}
      />
    </>
  )
}
