import { useState } from 'react'
import cn from 'classnames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { Button } from 'shared/ui/Button/Button'

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
            <Button
                className={styles.openButton}
                data-testid="sidebar-button"
                onClick={handleToggle}
                size="small"
                type="button"
                variant="backgroundInverted"
            >
                {isOpen ? '>' : '<'}
            </Button>

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
