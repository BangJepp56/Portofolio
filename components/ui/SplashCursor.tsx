'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Splash {
  id: number
  x: number
  y: number
}

const SplashCursor = () => {
  const [splashes, setSplashes] = useState<Splash[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleClick = (e: MouseEvent) => {
      const newSplash: Splash = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }

      setSplashes(prev => [...prev, newSplash])

      // Remove splash after animation
      setTimeout(() => {
        setSplashes(prev => prev.filter(splash => splash.id !== newSplash.id))
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-primary-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Splash effects */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={splash.id}
            className="fixed pointer-events-none z-40"
            initial={{
              x: splash.x - 25,
              y: splash.y - 25,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [1, 0.8, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="w-12 h-12 border-2 border-primary-500 rounded-full" />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}

export default SplashCursor