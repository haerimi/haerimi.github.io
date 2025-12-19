import ProjectCard from '@/components/ProjectCard'
import { motion } from 'framer-motion'
import { Project, projects } from '@/data/projects'
import { useState } from 'react'
import { Portal } from '@headlessui/react'
import Modal from '@/components/Modal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto bg-light-bg/93">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Feature Project
        </h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          실제 문제를 해결하고 가치를 창출한 프로젝트들입니다
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
              index={index} />
          ))}
        </div>
        {selectedProject && (
          <Portal>
            <Modal
              open={!!selectedProject}
              onClose={() => setSelectedProject(null)}
              project={selectedProject}
            />
          </Portal>
        )}
      </motion.div>
    </section >
  )
}

export default Projects
