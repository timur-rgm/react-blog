import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import styles from './LoginModal.module.scss'

interface Props {
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: Props) => {
    return (
        <Modal className={styles.root} isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    )
}
