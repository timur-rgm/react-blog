import { useCallback, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'app/providers/StoreProvider'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { selectLoginUsername } from '../../model/selectors/selectLoginUsername/selectLoginUsername'
import { selectLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword'
import { selectLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading'
import { selectLoginIsError } from '../../model/selectors/selectLoginError/selectLoginIsError'
import { setUsername, setPassword, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import styles from './LoginForm.module.scss'

const initialReducers: ReducersList = {
    login: loginReducer
}

const LoginForm = () => {
    const { t } = useTranslation()

    const username = useAppSelector(selectLoginUsername)
    const password = useAppSelector(selectLoginPassword)
    const isLoading = useAppSelector(selectLoginIsLoading)
    const error = useAppSelector(selectLoginIsError)

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
        <DynamicModuleLoader reducers={initialReducers}>
            <form className={styles.root}>
                <Text align="center" element="h2">
                    {t('Форма авторизации')}
                </Text>
                {error && (
                    <Text element="h3" variant="error">
                        {t('Неверные логин или пароль')}
                    </Text>
                )}

                <Input autoFocus onChange={handleUsernameChange} placeholder={t('Имя пользователя')} value={username} />
                <Input onChange={handlePasswordChange} placeholder={t('Пароль')} value={password} />

                <Button className={styles.button} disabled={isLoading} onClick={handleLoginClick} type="button" variant="outline">
                    {t('Войти')}
                </Button>
            </form>
        </DynamicModuleLoader>
    )
}

export default LoginForm
