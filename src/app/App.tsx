import { ThemeProvider } from 'app/providers/ThemeProvider'
import { RouterProvider } from 'app/providers/RouterProvider'
import './styles/index.scss'

export const App = () => {
    return (
        <ThemeProvider>
            <RouterProvider />
        </ThemeProvider>
    )
}
