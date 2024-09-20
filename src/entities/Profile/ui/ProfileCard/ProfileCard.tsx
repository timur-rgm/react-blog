import { useTranslation } from 'react-i18next'
import cn from 'classnames'

import type { Profile } from 'entities/Profile'
import { Text } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'

import styles from './ProfileCard.module.scss'

interface Props {
    data?: Profile
    error?: string
    isLoading?: boolean
    onFirstnameChange: (value: string) => void
    onLastnameChange: (value: string) => void
    readonly?: boolean
}

export const ProfileCard = (props: Props) => {
    const { data, error, isLoading, onFirstnameChange, onLastnameChange, readonly } = props

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
        <div className={styles.root}>
            <Input
                onChange={onFirstnameChange}
                placeholder={t('Имя')}
                readonly={readonly}
                value={data?.first}
            />
            <Input
                onChange={onLastnameChange}
                placeholder={t('Фамилия')}
                readonly={readonly}
                value={data?.lastname}
            />
        </div>
    )
}
