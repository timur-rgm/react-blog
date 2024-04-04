import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: 'shared/Loader'
}

export default meta

type Story = StoryObj<typeof Loader>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [(Story) => ThemeDecorator(Theme.DARK, Story)]
}
