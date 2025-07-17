'use client'

import { motion } from 'framer-motion'

interface Skill {
  id: string
  category: string
  name: string
  description: string
  technologies: string[]
  icon: string
}

interface SkillCardProps {
  skill: Skill
  icon: React.ReactNode
}

const SkillCard = ({ skill, icon }: SkillCardProps) => {
  return (
    <div className="card group">
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
    </div>
  )
}

export default SkillCard