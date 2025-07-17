'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: '1',
    title: 'Landing Page Project',
    description: 'Modern landing page with responsive design and engaging animations. Built with clean HTML5, CSS3, and JavaScript for optimal performance.',
    image_url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    project_url: 'https://jep-point.vercel.app',
    github_url: 'https://github.com/BangJepp56',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    featured: true,
    created_at: '2024-01-01',
    updated_at: '2024-01-01'
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Laravel backend and modern frontend. Features include user authentication, payment integration, and admin dashboard.',
    image_url: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    project_url: null,
    github_url: 'https://github.com/BangJepp56',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    featured: true,
    created_at: '2024-01-02',
    updated_at: '2024-01-02'
  },
  {
    id: '3',
    title: 'Mobile Task Manager',
    description: 'Cross-platform mobile application built with Flutter. Features task management, notifications, and cloud synchronization.',
    image_url: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg',
    project_url: null,
    github_url: 'https://github.com/BangJepp56',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    featured: false,
    created_at: '2024-01-03',
    updated_at: '2024-01-03'
  }
]

const Portfolio = () => {
  const featuredProjects = projectsData.filter(project => project.featured)
  const otherProjects = projectsData.filter(project => !project.featured)

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-primary-500">
              Featured Work
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} featured />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary-500">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio