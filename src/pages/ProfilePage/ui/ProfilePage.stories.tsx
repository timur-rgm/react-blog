import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof ProfilePage> = {
    component: ProfilePage,
    title: 'pages/ProfilePage'
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
    args: {},
    decorators: [(Story) => StoreDecorator({ profile: { readonly: true, isLoading: false } }, Story)]
}

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK, Story),
        (Story) => StoreDecorator({ profile: { readonly: true, isLoading: false } }, Story)
    ]
}
