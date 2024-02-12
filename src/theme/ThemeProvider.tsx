import { useState, ReactNode } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "./ThemeContext"

const initialTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface Props {
    children: ReactNode,
}

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<Theme>(initialTheme)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}