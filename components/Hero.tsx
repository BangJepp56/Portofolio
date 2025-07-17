'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, Eye } from 'lucide-react'
import ParticleBackground from './ui/ParticleBackground'
import ProfileCard from './ui/ProfileCard'

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <ParticleBackground />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <ProfileCard />
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                M. Jefri Agiansyah
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Full Stack Developer & UI/UX Designer with a passion for creating elegant solutions in the simplest way possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Link
                href="#portfolio"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                <Eye size={20} />
                View Work
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="/resume.pdf"
                className="btn-secondary inline-flex items-center gap-2"
                download
              >
                <Download size={20} />
                Download CV
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-600 rounded-full mt-2 animate-bounce"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero