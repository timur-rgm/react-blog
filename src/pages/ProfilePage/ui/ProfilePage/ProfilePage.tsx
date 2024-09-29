import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import {
    EditableProfileCard,
    fetchProfileData,
    profileReducer,
    selectProfileValidationErrors
} from 'features/EditProfileCard'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'

import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader'
import { Text } from 'shared/ui/Text/Text'

const initialReducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const { t } = useTranslation('profile')
    const validationErrors = useAppSelector(selectProfileValidationErrors)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const validationTexts: Record<string, string> = {
        'Username error': t('Логин обязятелен'),
        'Firstname error': t('Имя обязятельно'),
        'Lastname error': t('Фамилия обязательна'),
        'Age error': t('Некорректный возраст')
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ProfilePageHeader />
            {!!validationErrors?.length &&
                validationErrors.map((error) => (
                    <Text key={error} variant="error">
                        {validationTexts[error]}
                    </Text>
                ))}
            <EditableProfileCard />
        </DynamicModuleLoader>
    )
}

export default ProfilePage
