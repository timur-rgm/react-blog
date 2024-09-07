import { createAsyncThunk } from '@reduxjs/toolkit'

import { setAuthData, User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { api } from 'shared/api/api'

interface Props {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, Props>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        const response = await api.post<User>('/login', { username, password })

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
        thunkAPI.dispatch(setAuthData(response.data))

        return response.data
    }
)
