import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Profile, ProfileState } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileState = {
    isLoading: false,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.error = undefined
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchProfileData.rejected, (state) => {
                state.isLoading = false
                state.error = 'Error'
            })
    }
})

export const { actions } = profileSlice
export const { reducer: profileReducer } = profileSlice
