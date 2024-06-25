import { useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'app/providers/StoreProvider'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'

import { selectLoginState } from '../../model/selectors/selectLoginState/selectLoginState'
import { setUsername, setPassword } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import styles from './LoginForm.module.scss'

const LoginForm = () => {
    const { t } = useTranslation()

    const { username, password, isLoading, error } = useAppSelector(selectLoginState)
    const dispatch = useAppDispatch()

    const handleUsernameChange = useCallback(
        (value: string) => {
            dispatch(setUsername(value))
        },
        [dispatch]
    )

    const handlePasswordChange = useCallback(
        (value: string) => {
            dispatch(setPassword(value))
        },
        [dispatch]
    )

    const handleLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <form className={styles.root}>
            <Text align="center" element="h2">{t('Форма авторизации')}</Text>
            {error && <Text element="h3" variant="error">{t('Неверные логин или пароль')}</Text>}

            <Input autoFocus onChange={handleUsernameChange} placeholder={t('Имя пользователя')} value={username} />
            <Input onChange={handlePasswordChange} placeholder={t('Пароль')} value={password} />

            <Button className={styles.button} disabled={isLoading} onClick={handleLoginClick} type="button" variant="outline">
                {t('Войти')}
            </Button>
        </form>
    )
}

export default LoginForm
