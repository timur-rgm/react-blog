import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Profile } from 'entities/Profile'
import { api } from 'shared/api/api'

export const fetchProfileData = createAsyncThunk<Profile, void>('profile/fetchProfileData', async () => {
    const response = await api.get<Profile>('/profile')
    return response.data
})
