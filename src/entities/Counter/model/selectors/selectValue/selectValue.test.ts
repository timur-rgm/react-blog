import type { RootState } from 'app/providers/StoreProvider'
import { selectValue } from './selectValue'

describe('selectLoginState()', () => {
    test('should return counter value', () => {
        const state: Pick<RootState, 'counter'> = {
            counter: { value: 5 }
        }

        expect(selectValue(state as RootState)).toEqual(5)
    })
})
