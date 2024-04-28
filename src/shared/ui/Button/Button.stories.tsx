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

export const VariantDefault: Story = {
    args: {
        children: 'Text',
        variant: 'default'
    }
}

export const VariantClear: Story = {
    args: {
        children: 'Text',
        variant: 'clear'
    }
}

export const VariantOutline: Story = {
    args: {
        children: 'Text',
        variant: 'outline'
    }
}

export const VariantOutlineDark: Story = {
    args: {
        children: 'Text',
        variant: 'outline'
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK, Story)]
}

export const VariantBackground: Story = {
    args: {
        children: 'Text',
        variant: 'background'
    }
}

export const VariantBackgroundInverted: Story = {
    args: {
        children: 'Text',
        variant: 'backgroundInverted'
    }
}

export const RadiusNone: Story = {
    args: {
        children: 'Text',
        radius: 'none'
    }
}

export const RadiusSmall: Story = {
    args: {
        children: 'Text',
        radius: 'small'
    }
}

export const SizeSmall: Story = {
    args: {
        children: 'Text',
        size: 'small'
    }
}

export const SizeMedium: Story = {
    args: {
        children: 'Text',
        size: 'medium'
    }
}