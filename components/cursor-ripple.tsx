"use client"

import { useCursorRipple } from "@/hooks/use-cursor-ripple"

export function CursorRipple() {
  const { ripples } = useCursorRipple()

  return (
    <>
      <style>{`
        @keyframes ripple-effect {
          to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }

        .ripple {
          position: fixed;
          pointer-events: none;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(147, 112, 219, 0.8) 0%, rgba(167, 139, 250, 0.4) 70%, rgba(167, 139, 250, 0) 100%);
          width: 30px;
          height: 30px;
          animation: ripple-effect 0.6s ease-out forwards;
          z-index: 9999;
          box-shadow: 0 0 20px rgba(147, 112, 219, 0.6);
        }
      `}</style>

      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
    </>
  )
}
