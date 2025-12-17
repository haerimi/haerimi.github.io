import { motion } from 'framer-motion'
import { Github, Mail } from 'lucide-react'

const Introduce = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-r from-start-color to-end-color">
        <div className="relative z-10 text-center px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              안녕하세요.
              <br />
              저는 개발자{' '}
              <span className="bg-gradient-to-r from-slate-700 to-slate-400 bg-clip-text text-transparent">
                박해림
              </span>
              입니다.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
              사용자 경험을 최우선으로 생각하는 풀스택 개발자입니다.
              <br />
              깔끔한 코드와 효율적인 시스템 구축에 집중합니다.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6 justify-center mt-12"
          >
            <a href="https://github.com/haerimi" className="text-slate-400 hover:text-black transition-colors" target="_blank">
              <Github size={24} />
            </a>
            <a href="mailto:yjec14@naver.com" className="text-slate-400 hover:text-black transition-colors" target="_blank">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </section>
  )
}

export default Introduce
