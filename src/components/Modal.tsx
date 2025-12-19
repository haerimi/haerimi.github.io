import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Project } from '@/data/projects'
import { AnimatePresence, motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'

interface ModalProps {
    open: boolean
    onClose: () => void
    project: Project
}

export default function Modal({ open, onClose, project }: ModalProps) {
    return (
        <AnimatePresence>
            {open && (
                <Dialog open={open} onClose={onClose} className="relative z-10">
                    <DialogBackdrop
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                as={motion.div}
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 100 }}
                                // @ts-ignore
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-4xl"
                            >
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <DialogTitle as="h3" className="text-xl font-bold text-gray-900">
                                            {project.title}
                                        </DialogTitle>
                                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                                            <XMarkIcon className="size-6" />
                                        </button>
                                    </div>

                                    {project.details && (
                                        <div className="mt-2">
                                            <img
                                                src={project.details?.overview.image}
                                                alt={project.title}
                                                className="rounded-lg mb-4 w-full aspect-video object-cover"
                                            />
                                            <div className="text-sm text-gray-500 prose prose-slate max-w-none">
                                                <ReactMarkdown components={{
                                                    h3: ({ node, ...props }) => (
                                                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2" {...props} />
                                                    ),
                                                    p: ({ node, ...props }) => (
                                                        <p className="mb-4 leading-relaxed text-gray-600" {...props} />
                                                    ),
                                                    strong: ({ node, ...props }) => (
                                                        <strong className="font-bold text-gray-500" {...props} />
                                                    )
                                                }}
                                                >
                                                    {project.details?.overview.description}</ReactMarkdown>
                                            </div>
                                            <br />
                                            {project.details.features && (
                                                <div className="space-y-6">
                                                    <h4 className="font-bold text-lg border-b pb-2 ">Features</h4>
                                                    {project.details.features.map((feature, index) => (
                                                        <div key={index} className="flex flex-col gap-2">
                                                            <h5 className="font-semibold text-gray-900">· {feature.title}</h5>
                                                            <p className="text-sm text-gray-600 pl-3">
                                                                {feature.description}
                                                            </p>
                                                            <div className="w-full h-[250px] bg-gray-100 rounded-lg overflow-hidden mb-4">
                                                                <img
                                                                    src={feature.image}
                                                                    alt={feature.title}
                                                                    className="w-full h-full object-contain"
                                                                />
                                                            </div>
                                                        </div>

                                                    ))}
                                                </div>
                                            )}

                                            <div className="pt-6 border-t text-sm text-gray-500 space-y-1">
                                                <p><strong>Period:</strong> {project.details.period}</p>
                                                <p><strong>Role:</strong> {project.details.myRole}</p>
                                            </div>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {project.tech && (
                                                    project?.tech.map(t => (
                                                        <span key={t} className="px-2 py-1 bg-slate-100 text-xs rounded-md">
                                                            {t}
                                                        </span>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="inline-flex w-full justify-center rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 sm:ml-3 sm:w-auto"
                                    >
                                        닫기
                                    </button>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    )
}