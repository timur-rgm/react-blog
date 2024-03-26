import { useState } from 'react'
import cn from 'classnames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import styles from './Sidebar.module.scss'

interface Props {
    className?: string
}

export const Sidebar = ({ className }: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <aside className={cn(styles.root, className, { [styles.open]: isOpen })} data-testid="sidebar">
            <button data-testid="sidebar-button" onClick={handleToggle} type="button">toggle</button>

            <ul className={styles.switchers}>
                <li>
                    <ThemeSwitcher />
                </li>
                <li>
                    <LanguageSwitcher />
                </li>
            </ul>
        </aside>
    )
}
