import { useContext, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface Return {
    theme: Theme
    onThemeToggle?: () => void
}

export const useTheme = (): Return => {
    const { theme, setTheme } = useContext(ThemeContext)

    const bodyElement = document.querySelector('#body')

    useEffect(() => {
        if (bodyElement && theme) {
            bodyElement.className = theme
        }
    }, [bodyElement, theme])

    const handleToggle = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)

        if (bodyElement?.className) {
            bodyElement.className = newTheme
        }
    }

    return {
        theme: theme || Theme.LIGHT,
        onThemeToggle: handleToggle
    }
}
