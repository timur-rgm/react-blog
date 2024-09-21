import { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    title: 'shared/Avatar',
    args: {
        src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
    }
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
    args: {
        size: 200
    }
}

export const Small: Story = {
    args: {
        size: 70
    }
}
