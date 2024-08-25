import { useState } from 'react'
import cn from 'classnames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { Button } from 'shared/ui/Button/Button'

import { sidebarItems } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import styles from './Sidebar.module.scss'

interface Props {
    className?: string
}

export const Sidebar = ({ className }: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(false)

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

            <nav className={styles.navContainer}>
                <ul className={styles.menu}>
                    {sidebarItems.map(({ id, icon, path, title }) => (
                        <SidebarItem icon={icon} isCollapsed={isCollapsed} key={id} path={path} title={title} />
                    ))}
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
