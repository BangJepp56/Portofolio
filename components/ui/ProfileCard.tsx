'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Calendar, Star } from 'lucide-react'

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative max-w-sm mx-auto"
    >
      <div className="glass rounded-3xl p-8 border border-white/20 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 shadow-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-xl" />
        </div>

        <div className="relative z-10">
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative w-24 h-24 mx-auto mb-6"
          >
            <Image
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              alt="M. Jefri Agiansyah"
              fill
              className="rounded-2xl object-cover border-2 border-primary-500/50"
            />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Name and Title */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-1">
              M. Jefri Agiansyah
            </h3>
            <p className="text-primary-400 text-sm font-medium">
              Full Stack Developer
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-lg font-bold text-white">50+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">3+</div>
              <div className="text-xs text-gray-400">Years</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Star size={12} className="text-yellow-400 fill-current" />
                <span className="text-lg font-bold text-white">4.9</span>
              </div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <MapPin size={16} className="text-primary-400" />
              <span>Indonesia</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Calendar size={16} className="text-primary-400" />
              <span>Available for work</span>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {['React', 'Laravel', 'Flutter'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProfileCard