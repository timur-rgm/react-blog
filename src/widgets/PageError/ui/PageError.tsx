import { useTranslation } from 'react-i18next'
import styles from './PageError.module.scss'

export const PageError = () => {
    const { t } = useTranslation()

    const handleReload = () => {
        location.reload()
    }

    return (
        <div className={styles.root}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <button onClick={handleReload} type="button">
                {t('Обновить страницу')}
            </button>
        </div>
    )
}
