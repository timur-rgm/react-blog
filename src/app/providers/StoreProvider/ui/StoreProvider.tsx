import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { setupStore, RootState } from 'app/providers/StoreProvider'

interface Props {
    children: ReactNode
    preloadedState?: Partial<RootState>
}

export const StoreProvider = ({ children, preloadedState }: Props) => {
    const store = setupStore(preloadedState);

    return <Provider store={store}>{children}</Provider>
}
