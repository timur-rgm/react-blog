import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import i18n from 'shared/config/i18n/i18n'

import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import type { LoginState } from '../types/loginState'

const initialState: LoginState = {
    username: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.error = undefined
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state) => {
                state.isLoading = false
                state.error = `${i18n.t('Неверные логин или пароль')}`
            })
    }
})

export const {
    actions: { setUsername, setPassword, setIsLoading, setError }
} = loginSlice

export const { reducer: loginReducer } = loginSlice
