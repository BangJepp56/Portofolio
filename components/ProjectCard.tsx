'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  image_url: string
  project_url: string | null
  github_url: string | null
  technologies: string[]
  featured: boolean
  created_at: string
  updated_at: string
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <div className={`card group ${featured ? 'lg:col-span-1' : ''}`}>
      <div className="relative overflow-hidden rounded-xl mb-6">
        <Image
          src={project.image_url}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-dark-50 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-primary-600/10 text-primary-400 rounded-full border border-primary-600/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          {project.project_url && (
            <Link
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors font-medium"
            >
              <ExternalLink size={16} />
              Live Demo
            </Link>
          )}
          {project.github_url && (
            <Link
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-dark-50 transition-colors font-medium"
            >
              <Github size={16} />
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard