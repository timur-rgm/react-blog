import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

const meta: Meta<typeof AppLink> = {
    component: AppLink,
    args: {
        children: 'Text',
        to: '/'
    }
}

export default meta

type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    }
}

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK, Story)]
}

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    }
}

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK, Story)]
}

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED
    }
}

export const RedDark: Story = {
    args: {
        theme: AppLinkTheme.RED
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK, Story)]
}
