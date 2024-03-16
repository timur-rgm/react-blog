import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom'

import { MainLayout } from 'shared/ui/MainLayout/MainLayout'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'

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
            },
            {
                path: RoutePath.notFound,
                element: <NotFoundPage />
            }
        ]
    }
])

export const RouterProvider = () => {
    return <Provider router={router} />
}
