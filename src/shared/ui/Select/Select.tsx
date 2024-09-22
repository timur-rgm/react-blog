import { memo } from 'react'
import type { ChangeEvent } from 'react'

import cn from 'classnames'

import styles from './Select.module.scss'

interface SelectOption {
    title: string
    value: string
}

interface Props {
    onChange: (value: string) => void
    options: SelectOption[]
    placeholder?: string
    readonly?: boolean
    value?: string
}

export const Select = memo(function Select(props: Props) {
    const { onChange, options, placeholder, readonly, value } = props

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value)
    }

    return (
        <div className={styles.container}>
            {!!placeholder && <p className={styles.placeholder}>{placeholder}:</p>}

            <select
                className={cn(styles.select, { [styles.readonly]: readonly })}
                onChange={handleChange}
                value={value}
            >
                {options?.map((item: SelectOption) => (
                    <option className={styles.option} key={item.value} value={item.value}>
                        {item.title}
                    </option>
                ))}
            </select>
        </div>
    )
})
