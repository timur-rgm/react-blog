import { ReactNode, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type Variant = 'default' | 'clear' | 'outline'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    variant?: Variant
}

export const Button = ({ children, className,  variant = 'default', ...otherProps }: Props) => {
    return (
        <button className={cn(styles.root, styles[variant], className)} {...otherProps}>
            {children}
        </button>
    )
}
