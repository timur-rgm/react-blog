import axios from 'axios'
import { Dispatch } from '@reduxjs/toolkit'
import { RootState } from 'app/providers/StoreProvider'
import { loginByUsername } from './loginByUsername'
import { setAuthData } from 'entities/User'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('loginByUsername', () => {
    let dispatch: Dispatch
    let getState: () => RootState

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })

    test('success login', async () => {
        const value = {
            id: '1',
            username: 'Admin'
        }

        mockedAxios.post.mockReturnValue(
            Promise.resolve({
                data: value
            })
        )

        const action = loginByUsername({ username: 'Admin', password: '12345' })
        const result = await action(dispatch, getState, undefined)

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(dispatch).toHaveBeenCalledWith(setAuthData(value))
        expect(result.payload).toEqual(value)
    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject({ status: 403 }))

        const action = loginByUsername({ username: '123', password: '123' })
        const result = await action(dispatch, getState, undefined)

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
