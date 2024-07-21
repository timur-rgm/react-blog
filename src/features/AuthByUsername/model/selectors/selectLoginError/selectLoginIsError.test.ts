import type { RootState } from 'app/providers/StoreProvider'
import { selectLoginIsError } from './selectLoginIsError'

describe('selectLoginIsError()', () => {
    test('should return error', () => {
        const state: Pick<RootState, 'login'> = {
            login: {
                username: '',
                password: '',
                isLoading: false,
                error: 'error'
            }
        }

        expect(selectLoginIsError(state as RootState)).toEqual('error')
    })
    test('should work with empty state', () => {
        const state: Pick<RootState, 'login'> = {}

        expect(selectLoginIsError(state as RootState)).toEqual('')
    })
})
