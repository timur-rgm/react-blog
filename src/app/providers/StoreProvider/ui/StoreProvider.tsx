import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { setupStore, RootState, AsyncReducers } from 'app/providers/StoreProvider'

interface Props {
    children: ReactNode
    preloadedState?: Partial<RootState>
    asyncReducers?: AsyncReducers
}

export const StoreProvider = ({ children, preloadedState, asyncReducers }: Props) => {
    const store = setupStore(preloadedState, asyncReducers);

    return <Provider store={store}>{children}</Provider>
}
