import { DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Project } from '@/data/projects'
import ReactMarkdown from 'react-markdown'
import { useMemo, useState } from 'react'
import Modal from '@/components/Modal'

interface ProjectDetailProps {
    project: Project
    onClose: () => void
}

export default function ProjectModal({ onClose, project }: ProjectDetailProps) {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const memoMarkdown = useMemo(() => (
        <ReactMarkdown components={{
            h3: ({ node, ...props }) => (
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2" {...props} />
            ),
            p: ({ node, ...props }) => (
                <p className="mb-4 leading-relaxed text-gray-600" {...props} />
            ),
            strong: ({ node, ...props }) => (
                <strong className="font-bold text-gray-500" {...props} />
            ),
        }}
        >
            {project.details?.overview.description}
        </ReactMarkdown>
    ), [project.details?.overview.description])

    return (
        <>
            <div className="bg-white px-4 pb-4 pt-5 flex flex-col items-center sm:p-6">
                <div className="flex justify-between items-start mb-4">
                    <DialogTitle as="h3" className="text-xl font-bold text-gray-900">
                        {project.title}
                    </DialogTitle>
                    <button onClick={onClose} className="absolute right-4 top-4 z-50 text-gray-500 backdrop-blur-sm rounded-full p-1.5 hover:text-black transition-all">
                        <XMarkIcon className="size-6" />
                    </button>
                </div>

                {project.details && (
                    <div className="mt-2">
                        <img
                            src={project.details?.overview.image}
                            alt={project.title}
                            loading="lazy"
                            className="rounded-lg mb-4 w-full aspect-video object-cover "
                        />
                        <div className="text-sm text-gray-500 prose prose-slate max-w-none">
                            {memoMarkdown}
                        </div>
                        <br />
                        {project.details.features && (
                            <div className="space-y-6">
                                <h4 className="font-bold text-lg border-b pb-2 ">주요 기능</h4>
                                {project.details.features.map((feature, index) => (
                                    <div key={index} className="flex flex-col gap-2">
                                        <h5 className="font-semibold text-gray-900">· {feature.title}</h5>
                                        <p className="text-sm text-gray-600 pl-3">
                                            {feature.description}
                                        </p>
                                        <picture className="w-full h-[250px] bg-gray-100 rounded-lg overflow-hidden mb-4">
                                            {feature.webpSrc && <source srcSet={feature.webpSrc} type="image/webp" />}
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                loading="lazy"
                                                onClick={() => setSelectedImg(feature.image)}
                                                className="w-full h-full object-contain cursor-zoom-in"
                                            />
                                        </picture>
                                    </div>
                                ))}
                                {selectedImg && (
                                    <Modal
                                        key="image-modal"
                                        open={true}
                                        onClose={() => setSelectedImg(null)}
                                        maxWidth="sm:max-w-3xl "
                                    >
                                        <div className="relative p-2 flex flex-col items-center">
                                            <button onClick={() => setSelectedImg(null)}
                                                className="absolute right-4 top-4 z-50 text-white bg-black/40 rounded-full p-1.5 hover:bg-black/70 transition-all">
                                                <XMarkIcon className="size-8" />
                                            </button>
                                            <img src={selectedImg!} className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg mx-auto"
                                                alt={selectedImg} />
                                        </div>
                                    </Modal>
                                )}
                            </div>
                        )}

                        {project.details.diagrams && (
                            <div className="space-y-6">
                                <h4 className="font-bold text-lg border-b pb-2 ">시스템 아키텍처</h4>
                                {project.details.diagrams.map((feature, index) => (
                                    <div key={index} className="flex flex-col gap-2">
                                        <h5 className="font-semibold text-gray-900">{feature.title}</h5>
                                        <div className="whitespace-pre-line text-sm text-gray-600">
                                            <ReactMarkdown
                                                components={{
                                                    h4: ({ children }) => <h4 className="font-bold text-base">{children}</h4>,
                                                }}
                                            >                                                
                                            {feature.description}
                                            </ReactMarkdown>
                                        </div>
                                        <div className="w-full h-[250px] bg-gray-100 rounded-lg overflow-hidden mb-4">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                loading="lazy"
                                                onClick={() => setSelectedImg(feature.image)}
                                                className="w-full h-full object-contain cursor-zoom-in"
                                            />
                                        </div>
                                    </div>
                                ))}
                                {selectedImg && (
                                    <Modal
                                        key="image-modal"
                                        open={true}
                                        onClose={() => setSelectedImg(null)}
                                        maxWidth="sm:max-w-3xl "
                                    >
                                        <div className="relative p-2 flex flex-col items-center">
                                            <button onClick={() => setSelectedImg(null)}
                                                className="absolute right-4 top-4 z-50 text-white bg-black/40 rounded-full p-1.5 hover:bg-black/70 transition-all">
                                                <XMarkIcon className="size-8" />
                                            </button>
                                            <img src={selectedImg!} className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg mx-auto"
                                                alt={selectedImg} />
                                        </div>
                                    </Modal>
                                )}
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
        </>
    )
}