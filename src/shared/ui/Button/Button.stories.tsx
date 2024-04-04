import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/Button'
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        children: 'Text',
        variant: 'default'
    }
}

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear'
    }
}

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: 'outline'
    }
}

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        variant: 'outline'
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK, Story)]
}
