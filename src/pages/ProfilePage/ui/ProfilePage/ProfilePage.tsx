import { useEffect } from 'react'

import { useAppDispatch } from 'app/providers/StoreProvider'
import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditProfileCard'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'

import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader'

const initialReducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ProfilePageHeader />
            <EditableProfileCard />
        </DynamicModuleLoader>
    )
}

export default ProfilePage
