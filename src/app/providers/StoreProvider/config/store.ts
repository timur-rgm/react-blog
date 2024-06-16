import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { loginReducer } from 'features/AuthByUsername'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
