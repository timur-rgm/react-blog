import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'app/providers/StoreProvider'
import { selectProfileData, selectProfileIsLoading, selectProfileError } from 'entities/Profile'
import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import styles from './ProfileCard.module.scss'

export const ProfileCard = () => {
    const { t } = useTranslation('profile')

    const data = useAppSelector(selectProfileData)
    const isLoading = useAppSelector(selectProfileIsLoading)
    const error = useAppSelector(selectProfileError)

    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <Text element="h1" size={20}>{t('Профиль')}</Text>
                <Button variant="outline">{t('Редактировать')}</Button>
            </header>
            <div className={styles.content}>
                <Input placeholder={t('Имя')} value={data?.first} />
                <Input placeholder={t('Фамилия')} value={data?.lastname} />
            </div>
        </div>
    )
}
