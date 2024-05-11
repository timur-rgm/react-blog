import { StoryFn } from '@storybook/react'
import cn from 'classnames'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme, StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={cn('app', theme)}>
            <StoryComponent />
        </div>
    </ThemeProvider>
)
