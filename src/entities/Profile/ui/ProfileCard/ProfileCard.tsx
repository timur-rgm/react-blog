import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { CountrySelect, Country } from 'entities/Country'
import { CurrencySelect, Currency } from 'entities/Currency'
import type { Profile } from 'entities/Profile'
import { Avatar } from 'shared/ui/Avatar'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text } from 'shared/ui/Text/Text'

import styles from './ProfileCard.module.scss'

interface Props {
    data?: Profile
    error?: string
    isLoading?: boolean
    onAgeChange: (value: string) => void
    onAvatarChange: (value: string) => void
    onCityChange: (value: string) => void
    onCountryChange: (value: Country) => void
    onCurrencyChange: (value: Currency) => void
    onLastnameChange: (value: string) => void
    onLoginChange: (value: string) => void
    onFirstnameChange: (value: string) => void
    readonly?: boolean
}

export const ProfileCard = (props: Props) => {
    const {
        data,
        error,
        isLoading,
        onAgeChange,
        onAvatarChange,
        onCityChange,
        onCountryChange,
        onCurrencyChange,
        onFirstnameChange,
        onLastnameChange,
        onLoginChange,
        readonly
    } = props

    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <div className={cn(styles.root, styles.loading)}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={cn(styles.root, styles.error)}>
                <Text variant="error">{t('Ошибка загрузки')}</Text>
            </div>
        )
    }

    return (
        <div className={cn(styles.root, { [styles.editing]: !readonly })}>
            {!!data?.avatar && <Avatar className={styles.avatar} size={150} src={data.avatar} />}

            <Input onChange={onLoginChange} placeholder={t('Логин')} readonly={readonly} value={data?.username} />
            <Input onChange={onFirstnameChange} placeholder={t('Имя')} readonly={readonly} value={data?.first} />
            <Input onChange={onLastnameChange} placeholder={t('Фамилия')} readonly={readonly} value={data?.lastname} />
            <Input onChange={onAvatarChange} placeholder={t('Аватар')} readonly={readonly} value={data?.avatar} />
            <Input
                onChange={onAgeChange}
                placeholder={t('Возраст')}
                readonly={readonly}
                type="number"
                value={data?.age}
            />
            <Input onChange={onCityChange} placeholder={t('Город')} readonly={readonly} value={data?.city} />

            <CurrencySelect onChange={onCurrencyChange} readonly={readonly} value={data?.currency} />
            <CountrySelect onChange={onCountryChange} readonly={readonly} value={data?.country} />
        </div>
    )
}
