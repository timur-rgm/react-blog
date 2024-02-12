import { useContext } from "react";
import { ThemeContext, ThemeContextValue, Theme, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";

interface Return {
    theme: Theme
    onThemeToggle: () => void
}

export const useTheme = (): Return => {
    const { theme, setTheme } = useContext<ThemeContextValue>(ThemeContext)

    const handleToggle = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        onThemeToggle: handleToggle,
    }
}