import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'

import styles from './styles.module.scss'

export const ProfilePageHeader = () => {
    const { t } = useTranslation('profile')

    return (
        <header className={styles.header}>
            <Text element="h1" size={20}>
                {t('Профиль')}
            </Text>
            <Button variant="outline">{t('Редактировать')}</Button>
        </header>
    )
}
