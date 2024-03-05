import { useState, useEffect } from 'react'

// Define a type for the component's props
import React from 'react'

interface CursorFollowProps {
  text: string
  icon: React.ReactNode
}

// Use React.FC for a functional component with defined props
const CursorFollow: React.FC<CursorFollowProps> = ({ text, icon }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: '#000000be',
        pointerEvents: 'none',
        zIndex: 60,
        transform: 'translate(-50%, -50%) scale(0)',
        transition: 'transform 0.3s',
        backdropFilter: 'blur(5px)',
      }}
      className="grid font-medium text-white cursor-follower place-content-center"
    >
      {text}
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[70px] left-1/2 size-6 opacity-50">
        {icon}
      </div>
    </div>
  )
}

export default CursorFollow
