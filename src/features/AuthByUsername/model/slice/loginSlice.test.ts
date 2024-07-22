import { loginReducer } from 'features/AuthByUsername'
import { setUsername, setPassword } from '../slice/loginSlice'
import type { LoginState } from '../types/loginState'

describe('loginSlice', () => {
    test('setUsername', () => {
        const state: Partial<LoginState> = {
            username: ''
        }

        expect(loginReducer(state as LoginState, setUsername('Admin'))).toStrictEqual({
            username: 'Admin'
        })
    })
    test('setPassword', () => {
        const state: Partial<LoginState> = {
            password: ''
        }

        expect(loginReducer(state as LoginState, setPassword('12345'))).toStrictEqual({
            password: '12345'
        })
    })
})

