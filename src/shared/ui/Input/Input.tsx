import { InputHTMLAttributes, ChangeEvent, memo, useRef, useEffect } from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

type InputAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface Props extends InputAttributes {
    autoFocus?: boolean
    className?: string
    onChange?: (value: string) => void
    placeholder?: string
    readonly?: boolean
    value?: string | number
}

export const Input = memo(function Input(props: Props) {
    const { autoFocus, className, onChange, placeholder, readonly, type = 'text', value, ...otherProps } = props

    const ref = useRef<HTMLInputElement>(null)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
    }

    useEffect(() => {
        if (autoFocus) {
            ref?.current?.focus()
        }
    }, [autoFocus])

    return (
        <div className={styles.container}>
            {placeholder && <p className={styles.placeholder}>{placeholder}:</p>}
            <input
                className={cn(styles.input, className, { [styles.readonly]: readonly })}
                onChange={handleInputChange}
                readOnly={readonly}
                ref={ref}
                type={type}
                value={value}
                {...otherProps}
            />
        </div>
    )
})
