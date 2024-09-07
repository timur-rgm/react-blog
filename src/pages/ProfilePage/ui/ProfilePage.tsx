import { useEffect } from 'react'

import { useAppDispatch } from 'app/providers/StoreProvider'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileCard, profileReducer, fetchProfileData } from 'entities/Profile'

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
            <ProfileCard />
        </DynamicModuleLoader>
    )
}

export default ProfilePage
