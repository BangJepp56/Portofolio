'use client'

import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import { Code, Smartphone, Palette } from 'lucide-react'

const skillsData = [
  {
    id: '1',
    category: 'Web Development',
    name: 'Full Stack Development',
    description: 'Proficient in modern web technologies and frameworks for both frontend and backend development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Laravel', 'Filament'],
    icon: 'code'
  },
  {
    id: '2',
    category: 'Mobile Development',
    name: 'Cross-Platform Apps',
    description: 'Creating responsive and intuitive mobile applications for iOS and Android platforms',
    technologies: ['Flutter', 'Dart'],
    icon: 'smartphone'
  },
  {
    id: '3',
    category: 'Design',
    name: 'UI/UX Design',
    description: 'Creating visually appealing and user-friendly interfaces with focus on user experience',
    technologies: ['UI/UX Design', 'Photoshop', 'Canva', 'Figma'],
    icon: 'palette'
  }
]

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'code':
      return Code
    case 'smartphone':
      return Smartphone
    case 'palette':
      return Palette
    default:
      return Code
  }
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through code and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => {
            const IconComponent = getIconComponent(skill.icon)
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard
                  skill={skill}
                  icon={<IconComponent size={32} />}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills