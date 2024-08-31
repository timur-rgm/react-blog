import { AxiosInstance } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { setAuthData, User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface Props {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, Props, { extra: { api: AxiosInstance } }>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        const response = await thunkAPI.extra.api.post('/login', { username, password })

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
        thunkAPI.dispatch(setAuthData(response.data))

        return response.data
    }
)
