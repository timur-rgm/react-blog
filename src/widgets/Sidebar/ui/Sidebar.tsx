import { useState } from 'react'
import cn from 'classnames'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
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
        <aside className={cn(styles.root, className, { [styles.open]: isOpen })}>
            <button onClick={handleToggle}>toggle</button>

            <ul className={styles.switchers}>
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </aside>
    )
}
