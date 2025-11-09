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
          background: radial-gradient(circle, var(--primary) 0%, color-mix(in srgb, var(--primary) 40%, transparent) 70%, transparent 100%);
          width: 30px;
          height: 30px;
          animation: ripple-effect 0.6s ease-out forwards;
          z-index: 9999;
          box-shadow: 0 0 20px color-mix(in srgb, var(--primary) 60%, transparent);
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
