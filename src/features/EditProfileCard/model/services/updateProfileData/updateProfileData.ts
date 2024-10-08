import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState } from 'app/providers/StoreProvider'
import type { Profile } from 'entities/Profile'
import { api } from 'shared/api/api'

import { selectFormData } from '../../selectors'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<Profile, void>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { getState, rejectWithValue } = thunkAPI

        const formData = selectFormData(getState() as RootState)
        const errors = validateProfileData(formData)

        if (errors?.length) {
            return rejectWithValue(errors)
        }

        const response = await api.put<Profile>('/profile', formData)

        return response.data
    },
    {}
)
