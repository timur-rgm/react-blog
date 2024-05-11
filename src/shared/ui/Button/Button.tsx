import { ReactNode, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type Radius = 'none' | 'small'
type Size = 'small' | 'medium' | 'big'
type Variant = 'default' | 'clear' | 'clear-inverted' | 'outline' | 'background' | 'background-inverted'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    radius?: Radius
    size?: Size
    variant?: Variant
}

export const Button = ({ children, className, radius = 'none', size = 'small', variant = 'default', ...otherProps }: Props) => {
    const rootClasses = cn(
        styles.root,
        styles[`radius-${radius}`],
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        className
    )

    return (
        <button className={rootClasses} {...otherProps}>
            {children}
        </button>
    )
}
