'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
          </motion.div>
        </div>

        {/* Profile Info */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-1">John Doe</h3>
          <p className="text-blue-300 text-sm mb-2">Full Stack Developer</p>
          <div className="flex items-center justify-center text-gray-300 text-xs">
            <MapPin className="w-3 h-3 mr-1" />
            <span>San Francisco, CA</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-lg font-bold text-white">50+</div>
            <div className="text-xs text-gray-300">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">3+</div>
            <div className="text-xs text-gray-300">Years</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">100+</div>
            <div className="text-xs text-gray-300">Clients</div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-6">
          {[
            { icon: Github, href: '#', color: 'hover:text-gray-300' },
            { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
            { icon: Mail, href: '#', color: 'hover:text-red-400' },
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`text-gray-400 ${color} transition-colors duration-200`}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Status */}
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for work
          </div>
        </div>
      </div>
    </motion.div>
  );
}