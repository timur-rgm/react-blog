import { useState } from 'react'

import { useTranslation } from 'react-i18next'
import cn from 'classnames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { Button } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'

import styles from './Sidebar.module.scss'

interface Props {
    className?: string
}

export const Sidebar = ({ className }: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const { t } = useTranslation()

    const handleToggle = () => {
        setIsCollapsed((prev) => !prev)
    }

    return (
        <aside className={cn(styles.root, className, { [styles.collapsed]: isCollapsed })} data-testid="sidebar">
            <Button
                className={styles.openButton}
                data-testid="sidebar-button"
                onClick={handleToggle}
                size="small"
                type="button"
                variant="background-inverted"
            >
                {isCollapsed ? '>' : '<'}
            </Button>

            <nav className={styles.navConainer}>
                <ul className={styles.menu}>
                    <li>
                        <AppLink className={styles.menuLink} to={RoutePath.main}>
                            <MainIcon />
                            <span>{t('Главная')}</span>
                        </AppLink>
                    </li>
                    <li>
                        <AppLink className={styles.menuLink} to={RoutePath.about}>
                            <AboutIcon />
                            <span>{t('Контакты')}</span>
                        </AppLink>
                    </li>
                    <li>
                        <AppLink className={styles.menuLink} to={RoutePath.profile}>
                            <AboutIcon />
                            <span>{t('Страница профиля')}</span>
                        </AppLink>
                    </li>
                </ul>
            </nav>

            <ul className={styles.switchers}>
                <li>
                    <ThemeSwitcher />
                </li>
                <li>
                    <LanguageSwitcher isShort={isCollapsed} />
                </li>
            </ul>
        </aside>
    )
}
