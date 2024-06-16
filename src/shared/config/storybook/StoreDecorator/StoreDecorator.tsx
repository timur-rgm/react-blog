import { RootState, StoreProvider } from 'app/providers/StoreProvider'
import { StoryFn } from '@storybook/react'

export const StoreDecorator = (state: Partial<RootState>, StoryComponent: StoryFn) => {
    return (
        <StoreProvider preloadedState={state}>
            <StoryComponent />
        </StoreProvider>
    )
}
