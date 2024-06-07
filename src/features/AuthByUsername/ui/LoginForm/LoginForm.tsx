import { useState } from 'react'

import { useTranslation } from 'react-i18next'

import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import styles from './LoginForm.module.scss'

export const LoginForm = () => {
    const { t } = useTranslation()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (value: string) => {
        setUsername(value)
    }

    const handlePasswordChange = (value: string) => {
        setPassword(value)
    }

    return (
        <form className={styles.root}>
            <Input autoFocus onChange={handleUsernameChange} placeholder={t('Имя пользователя')} value={username} />
            <Input onChange={handlePasswordChange} placeholder={t('Пароль')} value={password} />

            <Button className={styles.button} type="button">
                {t('Войти')}
            </Button>
        </form>
    )
}
