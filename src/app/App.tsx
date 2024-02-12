import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "shared/ui/MainLayout/MainLayout";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { ThemeProvider } from "app/providers/ThemeProvider";

import "./styles/index.scss"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
        ]
    },

]);

export const App = () => {
    return (
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}
