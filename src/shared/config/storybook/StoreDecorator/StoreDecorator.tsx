import { AsyncReducers, RootState, StoreProvider } from 'app/providers/StoreProvider'
import { StoryFn } from '@storybook/react'
import { loginReducer } from 'features/AuthByUsername'
import { profileReducer } from 'entities/Profile'

const defaultAsyncReducers: AsyncReducers = {
    login: loginReducer,
    profile: profileReducer
}

export const StoreDecorator = (state: Partial<RootState>, StoryComponent: StoryFn) => {
    return (
        <StoreProvider asyncReducers={defaultAsyncReducers} preloadedState={state}>
            <StoryComponent />
        </StoreProvider>
    )
}
