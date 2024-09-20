import { ReactNode, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type Radius = 'none' | 'small'
type Size = 'small' | 'medium' | 'big'
type Variant = 'default' | 'clear' | 'clear-inverted' | 'outline' | 'outline-red' | 'background' | 'background-inverted'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    radius?: Radius
    size?: Size
    variant?: Variant
}

export const Button = (props: Props) => {
    const { children, className, radius = 'none', size = 'small', type = 'button', variant = 'default', ...otherProps } = props

    const rootClasses = cn(
        styles.root,
        styles[`radius-${radius}`],
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        className
    )

    return (
        // eslint-disable-next-line react/button-has-type
        <button className={rootClasses} type={type} {...otherProps}>
            {children}
        </button>
    )
}
