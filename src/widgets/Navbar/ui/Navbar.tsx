import { useState, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import cn from 'classnames'

import { Button } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

import styles from './Navbar.module.scss'

interface Props {
    classes?: {
        root?: string
        list?: string
    }
}

export const Navbar = ({ classes }: Props) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

    const { t } = useTranslation()

    const handleModalToggle = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev)
    }, [])

    return (
        <div className={cn(styles.root, classes?.root)}>
            <Button onClick={handleModalToggle} variant="clear-inverted">
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModalOpen} onClose={handleModalToggle}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
            </Modal>
        </div>
    )
}
