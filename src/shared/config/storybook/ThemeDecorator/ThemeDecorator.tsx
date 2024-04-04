import { StoryFn } from '@storybook/react'
import cn from 'classnames'
import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme, StoryComponent: StoryFn) => (
    <div className={cn('app', theme)}>
        <StoryComponent />
    </div>
)
