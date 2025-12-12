import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

// 기술 스택
const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'html/css'] },
  { category: 'Backend', items: ['Node.js', 'Nest.js', 'Express', 'TypeORM', 'Java'] },
  { category: 'Database', items: ['MySQL', 'MariaDB'] },
  { category: 'DevOps', items: ['GCP', 'Docker', 'GitHub', 'AWS'] },
  { category: 'Tools', items: ['Slack', 'Notion', 'GitHub', 'Figma']}
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-light-bg/93">
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
              지속적으로 학습하고 성장하는 기술 스택입니다
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
      </section>
  )
}

export default Skills
