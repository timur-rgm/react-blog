import { combineReducers, Action, Reducer } from '@reduxjs/toolkit'
import { RootState, StateKey } from './store'
import { StateFromReducersMapObject } from 'redux'

export function createReducerManager(initialReducers: Partial<Record<StateKey, Reducer>>) {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateKey[] = []

    return {
        getReducerMap: () => reducers,
        reduce: (state: Partial<RootState>, action: Action) => {
            if (keysToRemove.length > 0) {
                state = { ...state }

                for (const key of keysToRemove) {
                    delete state[key]
                }

                keysToRemove = []
            }

            return combinedReducer(state as StateFromReducersMapObject<RootState>, action)
        },
        add: (key: StateKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }

            reducers[key] = reducer

            combinedReducer = combineReducers(reducers)
        },
        remove: (key: StateKey) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]

            keysToRemove.push(key)

            combinedReducer = combineReducers(reducers)
        }
    }
}
