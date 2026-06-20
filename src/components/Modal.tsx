import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export interface ModalProps {
    open: boolean
    onClose: () => void
    children: React.ReactNode
    maxWidth?: string
}

const Modal = ({ open, onClose, children, maxWidth = "max-w-4xl"}: ModalProps) => {
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

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-screen items-center justify-center p-4 pt-20">
                            <DialogPanel
                                className={`relative w-full ${maxWidth || 'max-w-4xl'} transform overflow-hidden rounded-lg bg-white text-left shadow-xl my-8`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 100 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {children}
                                </motion.div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            )
            }
        </AnimatePresence >
    )
}

export default Modal
