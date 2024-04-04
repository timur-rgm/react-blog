import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
    component: ThemeSwitcher,
    title: 'widgets/ThemeSwitcher'
}

export default meta

type Story = StoryObj<typeof ThemeSwitcher>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [(Story) => ThemeDecorator(Theme.DARK, Story)]
}
