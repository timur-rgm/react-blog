import { ReactNode } from 'react'
import cn from 'classnames'
import styles from './Text.module.scss'

interface Props {
    align?: 'left' | 'center' | 'right' | 'justify'
    children: ReactNode
    className?: string
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
    lineHeight?: number
    mb?: number
    size?: number
    variant?: 'default' | 'error'
    weight?: 'normal' | 'semi-bold' | 'bold'
}

export const Text = (props: Props) => {
    const {
        align = 'left',
        children,
        className,
        element = 'p',
        lineHeight = 24,
        mb = 0,
        size = 16,
        variant = 'default',
        weight = 'normal'
    } = props

    const Component = element

    const classes = cn(styles.root, className, {
        [styles.variantDefault]: variant === 'default',
        [styles.variantError]: variant === 'error',
        [styles.weightNormal]: weight === 'normal',
        [styles.weightSemiBold]: weight === 'normal',
        [styles.weightBold]: weight === 'normal'
    })

    return (
        <Component
            className={classes}
            style={{
                marginBottom: mb + 'px',
                fontSize: size + 'px',
                lineHeight: lineHeight + 'px',
                textAlign: align
            }}
        >
            {children}
        </Component>
    )
}
