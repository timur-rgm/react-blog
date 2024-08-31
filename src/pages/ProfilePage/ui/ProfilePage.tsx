import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const initialReducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <h1>{t('Профиль')}</h1>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
