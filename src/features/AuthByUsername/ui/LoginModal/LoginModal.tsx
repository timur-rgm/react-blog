import { Suspense } from 'react'

import { Modal } from 'shared/ui/Modal/Modal'
import { Loader } from 'shared/ui/Loader/Loader'

import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'
import styles from './LoginModal.module.scss'

interface Props {
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: Props) => {
    return (
        <Modal className={styles.root} isOpen={isOpen} lazy onClose={onClose}>
            <Suspense fallback={<Loader/>}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </Modal>
    )
}
