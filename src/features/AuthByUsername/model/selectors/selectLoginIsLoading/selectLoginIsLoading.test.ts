import type { RootState } from 'app/providers/StoreProvider'
import { selectLoginIsLoading } from './selectLoginIsLoading'

describe('selectLoginIsLoading()', () => {
    test('should return loading true status', () => {
        const state: Pick<RootState, 'login'> = {
            login: {
                username: '',
                password: '',
                isLoading: true
            }
        }

        expect(selectLoginIsLoading(state as RootState)).toEqual(true)
    })
    test('should return loading false status', () => {
        const state: Pick<RootState, 'login'> = {
            login: {
                username: '',
                password: '',
                isLoading: false
            }
        }

        expect(selectLoginIsLoading(state as RootState)).toEqual(false)
    })
})
