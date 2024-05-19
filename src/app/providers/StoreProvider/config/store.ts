import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from 'entities/Counter/model/slice/counterSlice'

const rootReducer = combineReducers({
    counter: counterSlice
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
