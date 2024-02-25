import cn from 'classnames'

import { useTheme, Theme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import styles from './ThemeSwitcher.module.scss'

interface Props {
    className?: string
}

export const ThemeSwitcher = ({ className }: Props) => {
    const { theme, onThemeToggle } = useTheme()

    return (
        <button className={cn(styles.root, className)} onClick={onThemeToggle}>
            {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
        </button>
    )
}
