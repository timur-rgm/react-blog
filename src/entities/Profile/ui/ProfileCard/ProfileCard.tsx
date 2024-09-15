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
}

export const ProfileCard = ({ data, error, isLoading }: Props) => {
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
            <Input placeholder={t('Имя')} value={data?.first} />
            <Input placeholder={t('Фамилия')} value={data?.lastname} />
        </div>
    )
}
