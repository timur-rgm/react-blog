import { ReactNode, MouseEvent, useEffect, useCallback, useState } from 'react'
import cn from 'classnames'

import { Portal } from 'shared/ui/Portal/Portal'

import styles from './Modal.module.scss'

interface Props {
    children: ReactNode
    className?: string
    isOpen: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal = ({ children, className, isOpen, onClose, lazy }: Props) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const handleClose = useCallback(() => {
        if (onClose) {
            onClose()
        }
    }, [onClose])

    const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
    }

    const handleEscKey = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose()
            }
        },
        [handleClose]
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleEscKey)
        }

        return () => {
            removeEventListener('keydown', handleEscKey)
        }
    }, [isOpen, handleEscKey])

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={cn(styles.root, className, { [styles.opened]: isOpen })}>
                <div className={styles.overlay} onClick={handleClose}>
                    <div className={styles.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
