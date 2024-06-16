import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from './Navbar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'widgets/Navbar'
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Light: Story = {
    args: {},
    decorators: [(Story) => StoreDecorator({ user: {} }, Story)]
}

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => StoreDecorator({ user: {} }, Story),
        (Story) => ThemeDecorator(Theme.DARK, Story)
    ]
}

export const Authorized: Story = {
    args: {},
    decorators: [(Story) => StoreDecorator({ user: { authData: { id: '1', username: 'admin' } } }, Story)]
}
