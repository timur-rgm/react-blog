import { configureStore } from '@reduxjs/toolkit'
import counterSlice from 'entities/Counter/model/slice/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice
    },
    devTools: __IS_DEV__
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
