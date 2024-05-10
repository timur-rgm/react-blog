import { ReactNode, MouseEvent, useEffect, useCallback } from 'react'
import cn from 'classnames'
import { Portal } from 'shared/ui/Portal/Portal'
import styles from './Modal.module.scss'

interface Props {
    children: ReactNode
    className?: string
    isOpen: boolean
    onClose?: () => void
}

export const Modal = ({ children, className, isOpen, onClose }: Props) => {
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
