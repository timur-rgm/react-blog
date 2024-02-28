import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom'

import { MainLayout } from 'shared/ui/MainLayout/MainLayout'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

const router = createBrowserRouter([
    {
        path: RoutePath.main,
        element: <MainLayout />,
        children: [
            {
                path: RoutePath.main,
                element: <MainPage />
            },
            {
                path: RoutePath.about,
                element: <AboutPage />
            }
        ]
    }
])

export const RouterProvider = () => {
    return <Provider router={router} />
}
