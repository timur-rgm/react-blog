import { StoryFn } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme, StoryComponent: StoryFn) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={theme} id="body">
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
}
