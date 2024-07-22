import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { setAuthData } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('loginByUsername', () => {
    test('success login', async () => {
        const value = { id: '1', username: 'Admin' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: value }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: 'Admin', password: '12345' })

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(thunk.dispatch).toHaveBeenCalledWith(setAuthData(value))
        expect(result.payload).toEqual(value)
    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject({ status: 403 }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: '123', password: '123' })

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
