import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import NotFoundPage from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
    component: NotFoundPage,
    title: 'pages/NotFoundPage'
}

export default meta

type Story = StoryObj<typeof NotFoundPage>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [(Story) => ThemeDecorator(Theme.DARK, Story)]
}
