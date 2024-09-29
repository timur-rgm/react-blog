import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { Profile } from 'entities/Profile'

import type { ProfileState } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileState = {
    isLoading: false,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state: ProfileState, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        setProfileData: (state: ProfileState, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        },
        cancelProfileEditing: (state: ProfileState) => {
            state.readonly = true
            state.form = state.data
            state.validationErrors = undefined
        }
    },
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
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state) => {
                state.isLoading = false
                state.error = 'Error'
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validationErrors = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.error = undefined
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.readonly = true
                state.validationErrors = undefined
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validationErrors = action.payload as string[]
            })
    }
})

export const {
    actions: { setReadOnly, setProfileData, cancelProfileEditing }
} = profileSlice

export const { reducer: profileReducer } = profileSlice
