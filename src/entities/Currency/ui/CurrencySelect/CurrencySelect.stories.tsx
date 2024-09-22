import { Meta, StoryObj } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'

const meta: Meta<typeof CurrencySelect> = {
    component: CurrencySelect,
    title: 'entities/CurrencySelect',
    args: {}
}

export default meta

type Story = StoryObj<typeof CurrencySelect>

export const Primary: Story = {
    args: {}
}

export const Readonly: Story = {
    args: {
        readonly: true
    }
}
