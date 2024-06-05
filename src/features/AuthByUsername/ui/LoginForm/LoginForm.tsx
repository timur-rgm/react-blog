import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import styles from './LoginForm.module.scss'

export const LoginForm = () => {
    const { t } = useTranslation()

    return (
        <form className={styles.root}>
            <input className={styles.input} type="text" />
            <input className={styles.input} type="text" />
            <Button className={styles.button} type="button">
                {t('Войти')}
            </Button>
        </form>
    )
}
