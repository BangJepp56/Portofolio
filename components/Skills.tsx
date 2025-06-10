import { supabase } from '@/lib/supabase'
import { Skill } from '@/types/database'
import SkillCard from './SkillCard'
import { Code, Smartphone, Palette } from 'lucide-react'

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

const Skills = async () => {
  const { data: skills, error } = await supabase
    .from('skills')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching skills:', error)
    return <div>Error loading skills</div>
  }

  return (
    <section id="skills" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through code and design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills?.map((skill: Skill) => {
            const IconComponent = getIconComponent(skill.icon)
            return (
              <SkillCard
                key={skill.id}
                skill={skill}
                icon={<IconComponent size={32} />}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills