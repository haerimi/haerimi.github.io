import { skills } from '@/data/skills'
import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

const SkillCard = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-bold mb-4">
                    Tech Stack
                </h2>
                <p className="text-slate-400 mb-12 max-w-2xl">
                    프로젝트를 통해 익히고 활용하는 기술들입니다
                </p>

                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white backdrop-blur-sm rounded-xl p-6 hover:border-blue-500/50 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Code2 className="text-black-400" size={24} />
                                <h3 className="text-xl font-bold">{skill.category}</h3>
                            </div>
                            <ul className="space-y-2">
                                {skill.items.map((item) => (
                                    <li key={item} className="text-slate-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default SkillCard
