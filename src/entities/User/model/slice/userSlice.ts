import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import type { User, UserState } from '../types/user'
import { RootState } from '@reduxjs/toolkit/query'

const initialState: UserState = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
            state.authData = undefined
        }
    }
})

export const {
    actions: { setAuthData, initAuthData, logout }
} = userSlice

export const { reducer: userReducer } = userSlice
