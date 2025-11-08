"use client"

import { useCursorFollower } from "@/hooks/use-cursor-follower"

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
          border: 0.5px solid #0066ff;
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
          background: #0066ff;
          border-radius: 50%;
          left: 0;
          top: 0;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: opacity 0.3s ease-out;
          box-shadow: 0 0 8px rgba(0, 102, 255, 0.6);
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
