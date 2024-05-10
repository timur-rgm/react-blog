import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface Props {
    children: ReactNode
    parent?: HTMLElement
    key?: string
}

export const Portal = ({ children, parent = document.body, key }: Props) => {
    return createPortal(children, parent, key)
}
