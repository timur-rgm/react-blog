import { useState, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import cn from 'classnames'

import { useAppSelector, useAppDispatch } from 'app/providers/StoreProvider'
import { LoginModal } from 'features/AuthByUsername'
import { selectAuthData, logout } from 'entities/User'
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

    const authData = useAppSelector(selectAuthData)
    const dispatch = useAppDispatch()

    const { t } = useTranslation()

    const handleModalToggle = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev)
    }, [])

    const handleLogout = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={cn(styles.root, classes?.root)}>
                <Button onClick={handleLogout} variant="clear-inverted">
                    {t('Выйти')}
                </Button>
            </div>
        )
    }

    return (
        <div className={cn(styles.root, classes?.root)}>
            <Button onClick={handleModalToggle} variant="clear-inverted">
                {t('Войти')}
            </Button>

            <LoginModal isOpen={isAuthModalOpen} onClose={handleModalToggle} />
        </div>
    )
}
