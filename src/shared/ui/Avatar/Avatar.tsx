import cn from 'classnames'
import styles from './Avatar.module.scss'

interface Props {
    alt?: string
    className?: string
    size: number
    src: string
}

export const Avatar = (props: Props) => {
    const { alt = 'Avatar', className, size, src } = props

    return (
        <img
            alt={alt}
            className={cn(styles.root, className)}
            height={size}
            src={src}
            width={size}
        />
    )
}
