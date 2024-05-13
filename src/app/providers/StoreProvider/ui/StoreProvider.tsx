import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore, StateSchema } from 'app/providers/StoreProvider'

interface Props {
    children: ReactNode
    initialState?: StateSchema
}

export const StoreProvider = ({ children, initialState }: Props) => {
    const store = createReduxStore(initialState)

    return <Provider store={store}>{children}</Provider>
}
