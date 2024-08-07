import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

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
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.error = undefined
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state) => {
                state.isLoading = false
                state.error = 'Error'
            })
    }
})

export const {
    actions: { setUsername, setPassword }
} = loginSlice

export const { reducer: loginReducer } = loginSlice
