import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { ProfileCard } from 'entities/Profile'
import { Currency } from 'entities/Currency'

import {
    selectFormData,
    selectProfileIsLoading,
    selectProfileError,
    selectProfileIsReadOnly
} from '../../model/selectors'
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

    const handleLoginChange = useCallback(
        (value?: string) => {
            dispatch(setProfileData({ username: value }))
        },
        [dispatch]
    )

    const handleAgeChange = useCallback(
        (value?: string) => {
            const numberRegex = /^\d+$/

            if (value && numberRegex.test(value)) {
                dispatch(setProfileData({ age: Number(value) }))
            }
        },
        [dispatch]
    )

    const handleAvatarChange = useCallback(
        (value?: string) => {
            dispatch(setProfileData({ avatar: value }))
        },
        [dispatch]
    )

    const handleCurrencyChange = useCallback(
        (value?: Currency) => {
            dispatch(setProfileData({ currency: value }))
        },
        [dispatch]
    )

    const handleCityChange = useCallback(
        (value?: string) => {
            dispatch(setProfileData({ city: value }))
        },
        [dispatch]
    )

    return (
        <ProfileCard
            data={formData}
            error={error}
            isLoading={isLoading}
            onAgeChange={handleAgeChange}
            onAvatarChange={handleAvatarChange}
            onCityChange={handleCityChange}
            onCurrencyChange={handleCurrencyChange}
            onFirstnameChange={handleFirstnameChange}
            onLastnameChange={handleLastnameChange}
            onLoginChange={handleLoginChange}
            readonly={readonly}
        />
    )
}
