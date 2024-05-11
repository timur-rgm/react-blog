import { useState, ReactNode } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "../lib/ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface Props {
    children: ReactNode,
    initialTheme?: Theme
}

export const ThemeProvider = ({ children, initialTheme }: Props) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}