import { Project } from '@/data/projects'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
    project: Project
    index: number
    onClick: () => void
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
    return (
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group bg-white-900/50 rounded-xl overflow-hidden border cursor-pointer will-change-opacity">
            <div className="relative overflow-hidden aspect-video">
                <picture>
                    {project.webpSrc && <source srcSet={project.webpSrc} type="image/webp" />}
                    <img
                        src={project.image}
                        alt={project.title}
                        loading={index < 2 ? "eager" : "lazy"}
                        className="w-full h-full object-cover scale-[1.05] group-hover:scale-105 transition-transform duration-300 "
                    />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-slate-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech && (project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-black-400 rounded-lg text-xs border border-slate-500/20"
                        >
                            {tech}
                        </span>
                    )))}
                </div>

                <div className="flex gap-3">
                    {project.github && (
                        <a
                            href={project.github}
                            className="flex items-center gap-2 text-sm text-black-400 hover:text-slate-400 transition-colors"
                        >
                            <Github size={16} />
                            Code
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            className="flex items-center gap-2 text-sm text-black-400 hover:text-slate-400 transition-colors"
                        >
                            <ExternalLink size={16} />
                            Demo
                        </a>)}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
