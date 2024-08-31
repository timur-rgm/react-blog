import { configureStore } from '@reduxjs/toolkit'

import { loginReducer } from 'features/AuthByUsername'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { profileReducer } from 'entities/Profile'
import { api } from 'shared/api/api'

import { createReducerManager } from './reducerManager'

const staticReducers = {
    counter: counterReducer,
    user: userReducer
}

const asyncReducers = {
    login: loginReducer,
    profile: profileReducer
}

export const setupStore = (preloadedState?: Partial<RootState>, asyncReducers?: AsyncReducers) => {
    const reducerManager = createReducerManager({ ...staticReducers, ...asyncReducers })

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api
                    }
                }
            })
    })

    // @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
    store.reducerManager = reducerManager

    return store
}

type StaticReducers = typeof staticReducers
export type AsyncReducers = typeof asyncReducers

export type RootState = {
    [K in keyof StaticReducers]: ReturnType<StaticReducers[K]>
} & {
    [K in keyof AsyncReducers]?: ReturnType<AsyncReducers[K]>
}

export type StateKey = keyof StaticReducers | keyof AsyncReducers
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
