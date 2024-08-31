import { createSlice } from '@reduxjs/toolkit'
import type { ProfileState } from '../types/profile'

const initialState: ProfileState = {
    isLoading: false,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})

export const { actions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;