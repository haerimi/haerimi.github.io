import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import React from 'react'

// 프로젝트 데이터
const projects = [
    {
        id: 1,
        title: '데이터 요청 자동화 시스템',
        description: '수작업 수 시간 소요되던 데이터 추출 프로세스를 5분 이내로 단축. TypeORM과 Nest.js 기반 자동화 시스템 구축.',
        tech: ['Nest.js', 'TypeORM', 'GCP', 'Slack API'],
        github: 'https://github.com/yourusername/project1',
        demo: 'https://demo.example.com',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
        id: 2,
        title: 'E-Commerce Platform',
        description: '실시간 재고 관리와 결제 시스템이 통합된 전자상거래 플랫폼. React와 Node.js 풀스택 개발.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com/yourusername/project2',
        demo: 'https://demo.example.com',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
    },
    {
        id: 3,
        title: 'Task Management Dashboard',
        description: '팀 협업을 위한 실시간 태스크 관리 대시보드. 드래그 앤 드롭 기능과 실시간 알림 구현.',
        tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
        github: 'https://github.com/yourusername/project3',
        demo: 'https://demo.example.com',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
    }
];

const Card = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-whith-900/50 backdrop-blur-sm rounded-xl overflow-hidden border hover:transition-all duration-300"
                >
                    <div className="relative overflow-hidden aspect-video">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
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
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-black-400 rounded-lg text-xs border border-slate-500/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <a
                                href={project.github}
                                className="flex items-center gap-2 text-sm text-black-400 hover:text-slate-400 transition-colors"
                            >
                                <Github size={16} />
                                Code
                            </a>
                            <a
                                href={project.demo}
                                className="flex items-center gap-2 text-sm text-black-400 hover:text-slate-400 transition-colors"
                            >
                                <ExternalLink size={16} />
                                Demo
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default Card
