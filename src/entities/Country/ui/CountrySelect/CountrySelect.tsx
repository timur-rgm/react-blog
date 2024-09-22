import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Select } from 'shared/ui/Select'

import { Country } from '../../model/types/country'

const options = [
    { title: Country.GERMANY, value: Country.GERMANY },
    { title: Country.KAZAKHSTAN, value: Country.KAZAKHSTAN },
    { title: Country.RUSSIA, value: Country.RUSSIA },
    { title: Country.USA, value: Country.USA }
]

interface Props {
    onChange: (value: Country) => void
    readonly?: boolean
    value?: string
}

export const CountrySelect = memo(function CountrySelect({ onChange, readonly, value }: Props) {
    const { t } = useTranslation('profile')

    const handleChange = (value: string) => {
        onChange?.(value as Country)
    }

    return (
        <Select onChange={handleChange} options={options} placeholder={t('Страна')} readonly={readonly} value={value} />
    )
})
