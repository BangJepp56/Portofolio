'use client'

import { motion } from 'framer-motion'
import { Home, User, Code, Briefcase, Mail, Settings } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface DockItem {
  icon: React.ReactNode
  label: string
  href: string
}

const dockItems: DockItem[] = [
  { icon: <Home size={20} />, label: 'Home', href: '#about' },
  { icon: <User size={20} />, label: 'About', href: '#about' },
  { icon: <Code size={20} />, label: 'Skills', href: '#skills' },
  { icon: <Briefcase size={20} />, label: 'Portfolio', href: '#portfolio' },
  { icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
  { icon: <Settings size={20} />, label: 'Admin', href: '/admin' },
]

const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="glass rounded-2xl p-3 border border-white/20 backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/5 shadow-2xl">
        <div className="flex items-center gap-2">
          {dockItems.map((item, index) => (
            <motion.div
              key={item.label}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href={item.href}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-200 group"
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.2 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {item.icon}
                </motion.div>
              </Link>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? -50 : -40,
                  scale: hoveredIndex === index ? 1 : 0.8,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
              >
                <div className="bg-dark-800 text-white text-xs px-2 py-1 rounded-lg border border-white/20 whitespace-nowrap">
                  {item.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Dock