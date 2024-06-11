import { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'shared/Input'
}

export default meta

type Story = StoryObj<typeof Input>

export const Light: Story = {
    args: {
        placeholder: 'Placeholder',
        value: 'Some value'
    }
}

export const Dark: Story = {
    args: {
        placeholder: 'Placeholder',
        value: 'Some value'
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK, Story)]
}
