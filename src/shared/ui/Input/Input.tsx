import { InputHTMLAttributes, ChangeEvent, memo, useRef, useEffect } from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

type InputAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface Props extends InputAttributes {
    className?: string
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
    autoFocus?: boolean
}

export const Input = memo(function Input(props: Props) {
    const { className, value, onChange, placeholder, type = 'text', autoFocus, ...otherProps } = props

    const ref = useRef<HTMLInputElement>(null)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
    }

    useEffect(() => {
        if (autoFocus) {
            ref.current.focus()
        }
    }, [autoFocus])

    return (
        <div className={styles.container}>
            {placeholder && <p className={styles.placeholder}>{placeholder}</p>}

            <input
                className={cn(styles.input, className)}
                onChange={handleInputChange}
                ref={ref}
                type={type}
                value={value}
                {...otherProps}
            />
        </div>
    )
})
