import type { RootState } from 'app/providers/StoreProvider'
import { selectLoginUsername } from './selectLoginUsername'

describe('selectLoginUsername()', () => {
    test('should return username', () => {
        const state: Pick<RootState, 'login'> = {
            login: {
                username: 'Admin',
                password: '12345',
                isLoading: false
            }
        }

        expect(selectLoginUsername(state as RootState)).toEqual('Admin')
    })
    test('should work with empty state', () => {
        const state: Pick<RootState, 'login'> = {}

        expect(selectLoginUsername(state as RootState)).toEqual('')
    })
})
