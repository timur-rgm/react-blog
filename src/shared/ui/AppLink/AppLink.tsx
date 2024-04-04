import { ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import cn from 'classnames'

import styles from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface Props extends LinkProps {
    children?: ReactNode
    className?: string
    theme?: AppLinkTheme
}

export const AppLink = (props: Props) => {
    const { to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps } = props

    return (
        <Link className={cn(styles.root, className, styles[theme])} to={to} {...otherProps}>
            {children}
        </Link>
    )
}
