import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'widgets/Navbar'
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK, Story)
    ]
}
