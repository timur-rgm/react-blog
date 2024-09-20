import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { selectProfileIsReadOnly, setReadOnly, cancelProfileEditing } from 'features/EditProfileCard'
import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'

import styles from './styles.module.scss'

export const ProfilePageHeader = () => {
    const { t } = useTranslation('profile')

    const readonly = useAppSelector(selectProfileIsReadOnly)
    const dispatch = useAppDispatch()

    const handleEdit = () => {
        dispatch(setReadOnly(false))
    }

    const handleSave = () => {
        dispatch(setReadOnly(true))
    }

    const handleCancelEdit = () => {
        dispatch(cancelProfileEditing())
    }

    return (
        <header className={styles.header}>
            <Text element="h1" size={20}>
                {t('Профиль')}
            </Text>

            {readonly ? (
                <Button onClick={handleEdit} variant="outline">
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button className={styles.saveButton} onClick={handleSave} variant="outline">
                        {t('Сохранить')}
                    </Button>
                    <Button onClick={handleCancelEdit} variant="outline-red">
                        {t('Отмена')}
                    </Button>
                </>
            )}
        </header>
    )
}
