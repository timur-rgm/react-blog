import { useState, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import cn from 'classnames'

import { LoginModal } from 'features/AuthByUsername'
import { Button } from 'shared/ui/Button/Button'

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

            <LoginModal isOpen={isAuthModalOpen} onClose={handleModalToggle} />
        </div>
    )
}
