import counterReducer, { increment, decrement } from './counterSlice'
import type { CounterState } from '../types/counterState'

describe('CounterSlice', () => {
    test('increment', () => {
        const state: CounterState = {
            value: 5
        }

        expect(counterReducer(state, increment())).toEqual({ value: 6 })
    })

    test('decrement', () => {
        const state: CounterState = {
            value: 5
        }

        expect(counterReducer(state, decrement())).toEqual({ value: 4 })
    })

    test('should work with empty state', () => {
        expect(counterReducer(undefined, increment())).toEqual({ value: 1 })
    })
})
