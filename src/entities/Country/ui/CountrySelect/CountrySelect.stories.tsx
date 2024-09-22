import { Meta, StoryObj } from '@storybook/react'
import { CountrySelect } from './CountrySelect'

const meta: Meta<typeof CountrySelect> = {
    component: CountrySelect,
    title: 'entities/CountrySelect',
    args: {}
}

export default meta

type Story = StoryObj<typeof CountrySelect>

export const Primary: Story = {
    args: {}
}

export const Readonly: Story = {
    args: {
        readonly: true
    }
}
