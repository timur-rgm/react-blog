import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { ProfileCard } from 'entities/Profile'

import { selectFormData, selectProfileIsLoading, selectProfileError, selectProfileIsReadOnly } from '../../model/selectors'
import { setProfileData } from '../../model/slice/profileSlice'

export const EditableProfileCard = () => {
    const formData = useAppSelector(selectFormData)
    const isLoading = useAppSelector(selectProfileIsLoading)
    const error = useAppSelector(selectProfileError)
    const readonly = useAppSelector(selectProfileIsReadOnly)

    const dispatch = useAppDispatch()

    const handleFirstnameChange = useCallback(
        (value?: string) => {
            dispatch(setProfileData({ first: value }))
        },
        [dispatch]
    )

    const handleLastnameChange = useCallback(
        (value?: string) => {
            dispatch(setProfileData({ lastname: value }))
        },
        [dispatch]
    )

    return (
        <ProfileCard
            data={formData}
            error={error}
            isLoading={isLoading}
            onFirstnameChange={handleFirstnameChange}
            onLastnameChange={handleLastnameChange}
            readonly={readonly}
        />
    )
}
