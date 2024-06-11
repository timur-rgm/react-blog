import { useContext, useEffect } from 'react'
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

interface Return {
    theme?: Theme
    onThemeToggle?: () => void
}

export const useTheme = (): Return => {
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        document.querySelector('#body').className = theme
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleToggle = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme!(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        document.querySelector('#body').className = newTheme
    }

    return {
        theme,
        onThemeToggle: handleToggle
    }
}
