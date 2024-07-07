import { AsyncReducers, RootState, StoreProvider } from 'app/providers/StoreProvider'
import { StoryFn } from '@storybook/react'
import { loginReducer } from 'features/AuthByUsername'

const defaultAsyncReducers: AsyncReducers = {
    login: loginReducer
}

export const StoreDecorator = (state: Partial<RootState>, StoryComponent: StoryFn) => {
    return (
        <StoreProvider asyncReducers={defaultAsyncReducers} preloadedState={state}>
            <StoryComponent />
        </StoreProvider>
    )
}
