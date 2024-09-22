import { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
    component: Select,
    title: 'shared/Select',
    args: {
        options: [
            {
                title: 'Option 1',
                value: 'Option 1'
            },
            {
                title: 'Option 2',
                value: 'Option 2'
            },
            {
                title: 'Option 3',
                value: 'Option 3'
            }
        ]
    }
}

export default meta

type Story = StoryObj<typeof Select>

export const Primary: Story = {
    args: {
        placeholder: 'Label'
    }
}

export const Readonly: Story = {
    args: {
        placeholder: 'Label',
        readonly: true
    }
}

export const WithoutLabel: Story = {
    args: {}
}
