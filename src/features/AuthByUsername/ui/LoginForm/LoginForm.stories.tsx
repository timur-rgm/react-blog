import { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof LoginForm> = {
    component: LoginForm,
    title: 'features/LoginForm'
}

export default meta

type Story = StoryObj<typeof LoginForm>

export const Light: Story = {
    args: {},
    decorators: [(Story) => StoreDecorator({}, Story)]
}

export const Dark: Story = {
    args: {},
    decorators: [(Story) => StoreDecorator({}, Story), (Story) => ThemeDecorator(Theme.DARK, Story)]
}

export const Loading: Story = {
    args: {},
    decorators: [(Story) => StoreDecorator(
        { login: { username: 'admin', password: '123', isLoading: true } },
        Story)]
}

export const Error: Story = {
    args: {},
    decorators: [
        (Story) =>
            StoreDecorator(
                { login: { username: 'admin', password: '123', isLoading: false, error: 'Не верные логин или пароль' } },
                Story
            )
    ]
}
