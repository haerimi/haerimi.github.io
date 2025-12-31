import { DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FeatureDetail, Project } from '@/data/projects'
import ReactMarkdown from 'react-markdown'
import { useCallback, useMemo, useState } from 'react'
import Modal from '@/components/Modal'
import React from 'react'

interface ProjectDetailProps {
    project: Project
    onClose: () => void
}

const FeatureItem = React.memo(({ feature, onImageClick }: { feature: FeatureDetail, onImageClick: (f: any) => void }) => (
    <div className="flex flex-col gap-2">
        <h5 className="font-semibold text-gray-900">· {feature.title}</h5>
        <p className="text-sm text-gray-600 pl-3">{feature.description}</p>
        <picture
            className="w-full h-[250px] cursor-zoom-in bg-gray-100 rounded-lg overflow-hidden mb-4"
            onClick={() => onImageClick(feature)}
        >
            {feature.webpSrc && <source srcSet={feature.webpSrc} type="image/webp" />}
            <img src={feature.image} loading="lazy" decoding="async" className="w-full h-full object-contain" />
        </picture>
    </div>
));

export default function ProjectModal({ onClose, project }: ProjectDetailProps) {
    const [selectedImg, setSelectedImg] = useState<FeatureDetail | null>(null);

    const handleImageClick = useCallback((feature: FeatureDetail) => {
        setSelectedImg(feature);
    }, []);
    
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
            )
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
                    <button onClick={onClose} className="absolute right-4 top-4 z-50 text-gray-500 rounded-full p-1.5 hover:text-black transition-all">
                        <XMarkIcon className="size-6" />
                    </button>
                </div>

                {project.details && (
                    <div className="mt-2">
                        <picture>
                            {project.details?.overview.webpSrc && <source srcSet={project.details?.overview.webpSrc} type="image/webp" />}
                            <img
                                src={project.details?.overview.image}
                                alt={project.title}
                                loading="lazy"
                                className="rounded-lg mb-4 w-full aspect-video object-cover "
                            />
                        </picture>
                        <div className="text-sm text-gray-500 prose prose-slate max-w-none">
                            {memoMarkdown}
                        </div>
                        <br />
                        {project.details.features && (
                            <div className="space-y-6">
                                <h4 className="font-bold text-lg border-b pb-2 ">Features</h4>
                                {project.details.features.map((feature, index) => (
                                    <FeatureItem key={index} feature={feature} onImageClick={handleImageClick} />
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
                        <picture >
                            {selectedImg.webpSrc && <source srcSet={selectedImg.webpSrc} type="image/webp" />}
                            <img src={selectedImg.image}
                                decoding="async"
                                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg mx-auto"
                                alt={selectedImg.title} />
                        </picture>
                    </div>
                </Modal>
            )}
        </>
    )
}