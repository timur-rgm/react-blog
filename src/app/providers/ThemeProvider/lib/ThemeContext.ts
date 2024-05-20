import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light-theme',
    DARK = 'dark-theme'
}

export interface ThemeContextValue {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({});

export const LOCAL_STORAGE_THEME_KEY = "theme"