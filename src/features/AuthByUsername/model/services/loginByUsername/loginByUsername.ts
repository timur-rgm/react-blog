import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { setAuthData, User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface Props {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, Props>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
    const response = await axios.post('http://localhost:8000/login', { username, password })

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    thunkAPI.dispatch(setAuthData(response.data))

    return response.data
})
