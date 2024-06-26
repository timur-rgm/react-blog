import { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
    component: Text,
    title: 'shared/Text'
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
    args: {
        children: 'Text',
    }
}

export const Error: Story = {
    args: {
        children: 'Text',
        variant: 'error'
    }
}
