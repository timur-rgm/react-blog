import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select'
import { Currency } from '../../model/types/currency'

const options = [
    { title: Currency.USD, value: Currency.USD },
    { title: Currency.EUR, value: Currency.EUR },
    { title: Currency.RUB, value: Currency.RUB }
]

interface Props {
    onChange: (value: Currency) => void
    readonly?: boolean
    value?: string
}

export const CurrencySelect = ({ onChange, readonly, value }: Props) => {
    const { t } = useTranslation('profile')

    const handleChange = (value: string) => {
        onChange?.(value as Currency)
    }

    return (
        <Select
            onChange={handleChange}
            options={options}
            placeholder={t('Валюта')}
            readonly={readonly}
            value={value}
        />)
}
