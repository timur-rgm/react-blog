import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { RouterProvider } from 'app/providers/RouterProvider'
import './styles/index.scss'

export const App = () => {
    return (
        <StoreProvider>
            <ThemeProvider>
                <RouterProvider />
            </ThemeProvider>
        </StoreProvider>
    )
}
