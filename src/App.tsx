import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { MainPageLazy } from "./routes/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./routes/AboutPage/AboutPage.lazy";
import { ThemeProvider } from "./theme/ThemeProvider";

import "./styles/index.scss"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <MainPageLazy />,
            },
            {
                path: "/about",
                element: <AboutPageLazy />,
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
