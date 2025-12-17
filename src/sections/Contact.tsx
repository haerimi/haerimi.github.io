import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        Let's Connect
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <a href="https://github.com/haerimi" className="px-3 py-1 text-white rounded-full text-xs border border-white-20">
                                Github
                            </a>
                            <a href="mailto:yjec14@naver.com" className="px-3 py-1 text-white rounded-full text-xs border border-white-20">
                                E-Mail
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
