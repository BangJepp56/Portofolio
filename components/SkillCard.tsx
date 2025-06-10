'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/types/database'

interface SkillCardProps {
  skill: Skill
  icon: React.ReactNode
}

const SkillCard = ({ skill, icon }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card group"
    >
      <div className="text-primary-500 mb-4 group-hover:text-primary-400 transition-colors">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-dark-50">
        {skill.name}
      </h3>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {skill.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {skill.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-primary-600/10 text-primary-400 rounded-full border border-primary-600/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillCard