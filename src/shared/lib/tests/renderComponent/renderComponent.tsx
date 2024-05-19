import { ReactNode, PropsWithChildren } from 'react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'

import { setupStore, RootState, AppStore } from 'app/providers/StoreProvider'
import i18nForTests from 'shared/config/i18n/i18nForTests'

interface RenderComponentOptions {
    route?: string
    preloadedState?: Partial<RootState>
    store?: AppStore
}

export function renderComponent(component: ReactNode, options: RenderComponentOptions = {}) {
    const { route = '/', preloadedState = {}, store = setupStore(preloadedState), ...renderOptions } = options

    const Wrapper = ({ children }: PropsWithChildren) => (
        <Provider store={store}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
            </MemoryRouter>
        </Provider>
    )

    return {
        store,
        ...render(component, { wrapper: Wrapper, ...renderOptions })
    }
}
