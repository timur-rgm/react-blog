import type { RootState } from 'app/providers/StoreProvider'
import { selectLoginPassword } from './selectLoginPassword'

describe('selectLoginPassword()', () => {
    test('should return password', () => {
        const state: Pick<RootState, 'login'> = {
            login: {
                username: '',
                password: '12345',
                isLoading: false
            }
        }

        expect(selectLoginPassword(state as RootState)).toEqual('12345')
    })
    test('should work with empty state', () => {
        const state: Pick<RootState, 'login'> = {}

        expect(selectLoginPassword(state as RootState)).toEqual('')
    })
})
